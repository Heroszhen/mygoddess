import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';
import { Movie } from '../../../myclasses/Movie';

@Component({
  selector: 'app-adminmovie',
  templateUrl: './adminmovie.component.html',
  styleUrls: ['./adminmovie.component.css']
})
export class AdminmovieComponent implements OnInit {
	showsection:any = -1;
	allmovies:any;
	onemovie:any;
	movie1 = new Movie("addonemovie");
	movie2 = new Movie("editonemovie");
	msgalert:any;
	idplot = -1;
	
	constructor(private ms:MyserviceService) {
		this.showsection = 1
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
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'gotmovies'){
						this.allmovies = value['data'];
						//console.log(this.allmovies);
					}
				}
			});
		});
	}
	
	addOneMovie(){
		this.addMovie();
		this.movie1.reset();
	}
	
	addMovie(){
		this.ms.mypostquery(this.movie1,'apiadmin.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allmovies = value['data'];
						this.msgalert = "<div class='alert alert-success' id='msgalert'>Votre film a été enregistré avec succès</div>";
					}
					if(value['response'] == 'no'){
						this.msgalert = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
	
	showPlot(key){
		if(this.idplot == -1)this.idplot = key;
		else this.idplot = -1;
	}
	
	editOneMovie(key){
		this.movie2.id= this.allmovies[key].id;
		this.movie2.name = this.allmovies[key].name;
		this.movie2.release_date = this.allmovies[key].release_date;
		this.movie2.running_time = this.allmovies[key].running_time;
		this.movie2.actors = this.allmovies[key].actors;
		this.movie2.genre = this.allmovies[key].genre;
		this.movie2.plot = this.allmovies[key].plot;
		this.movie2.poster = this.allmovies[key].poster;
	}
	
	editMovie(){
		this.ms.mypostquery(this.movie2,'apiadmin.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allmovies = value['data'];
						//this.msgalert = "<div class='alert alert-success'>Vos modifications ont été enregistrées avec succès</div>";
						//$('#exampleModalLong').modal('hide')
					}
					if(value['response'] == 'no'){
						//this.msgalert = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
}
