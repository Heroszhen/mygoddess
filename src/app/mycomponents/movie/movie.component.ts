import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../myservice/myservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	page = "movie";
	allmovies = "";
	showsection1 = true;
	showsection2 = false;
	onemovie:any;
  constructor(private router: Router,private ms : MyserviceService) { 
	//if(this.ms.getCookie('user') == "no")this.router.navigate(['/sign']);
	this.getAllMovies();
  }

  ngOnInit() {
  }

	getAllMovies(){
		var query = {
			'action':'allmovies'
		};
		this.ms.mypostquery(query,'api.php');
		this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'gotmovies'){
						this.allmovies = value['data'];
						//console.log(this.allmovies);
					}
				}
		});
	}
	
	showinfos(key){
		this.onemovie = this.allmovies[key];
		this.showsection1 = false;
		this.showsection2 = true;
		
	}
	closeinfos(){
		this.showsection1 = true;
		this.showsection2 = false;
	}
}
