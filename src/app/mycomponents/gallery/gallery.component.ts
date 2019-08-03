import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../myservice/myservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	page = "gallery";
	allphotos = "";
	showbigimg = false;
	bigimgsrc:string = "";
	showdiaporama = false;
	diaporamatime = 0;
	onephoto = true;
	border1 = false;
	flouter = false;
	griser = false;
  constructor(private router: Router,private ms : MyserviceService) { 
	//if(this.ms.getCookie('user') == "no")this.router.navigate(['/sign']);
	this.getAllPhotos();
	
  }

  ngOnInit() {
  }
	
	getAllPhotos(){
		var query = {
			'action':'allphotos'
		};
		this.ms.mypostquery(query,'api.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
			if(value != null && Object.keys(value).length !== 0){
				if(value['response'] == 'gotphotos'){
					this.allphotos = value['data'];
				}
			}
		});
		});
	}
	
	enlargephoto(link){
		this.bigimgsrc = link;
		this.showbigimg = true;
	}
	
	closebigimg(){
		this.showbigimg = false;
	}
	

	diaporama(){
		if(this.allphotos != ""){
			var c = this;
			this.showdiaporama = true;
			this.bigimgsrc = this.allphotos[0].link.toString();
			var index = 1;
			this.diaporamatime = setInterval(function(){
				c.bigimgsrc = c.allphotos[index].link.toString();
				index = index + 1;
				if(index == c.allphotos.length)index = 0;
			}, 1000);
		}
	}
	
	closediaporama(){
		clearInterval(this.diaporamatime);
		this.diaporamatime = 0;
		this.showdiaporama = false;
	}
	
	showborder1(){
		if(this.border1 == true)this.border1 = false;
		else this.border1 = true;
	}
	
	showflouter(){
		if(this.flouter == true)this.flouter = false;
		else this.flouter = true;
	}
	
	showgriser(){
		if(this.griser == true)this.griser = false;
		else this.griser = true;
	}
}
