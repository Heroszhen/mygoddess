import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-adminvideo',
  templateUrl: './adminvideo.component.html',
  styleUrls: ['./adminvideo.component.css']
})
export class AdminvideoComponent implements OnInit {
	allvideos:any;
	shows2 = false;
	video1:any = {
		"title":"",
		"link":"",
		"type":"",
	};
	video2 = {
		"title":"",
		"link":"",
		"type":"",
		"action":"addonevideo"
	};
	msgalert = "";
	msgalert2 = "";
	numero = "";
  constructor(private ms:MyserviceService) {
	this.getAllVideos();
   }

  ngOnInit() {
  }

	getAllVideos(){
		var query = {
			'action':'allvideos'
		};
		this.ms.mypostquery(query,'api.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'gotvideos'){
						this.allvideos = value['data'];
						//console.log(this.allvideos);
					}
				}
			});
		});
	}
	
	editOneVideo(key){
		if(this.shows2 == true)this.shows2 = false;
		else{
			this.video1 = this.allvideos[key];
			this.numero = this.video1.id;
			this.shows2 = true;
		 }
	}
	
	showsection2(){
		if(this.shows2 == true)this.shows2 = false;
		else this.shows2 = true;
	}
	
	addOneVideo(){
		this.ms.mypostquery(this.video2,'apiadmin.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allvideos = value['data'];
						this.msgalert = "<div class='alert alert-success' id='msgalert'>Votre video a été enregistrée avec succès</div>";
					}
					if(value['response'] == 'no'){
						this.msgalert = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
	
	deleteOneVideo(key){
		var query = {
			"id":this.allvideos[key].id,
			"action":"deleteonevideo"
		}
		this.ms.mypostquery(query,'apiadmin.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allvideos = value['data'];
					}
				}
			});
		});
	}
	
	editVideo(){
		this.video1['action'] = "editonevideo";
		this.ms.mypostquery(this.video1,'apiadmin.php');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allvideos = value['data'];
						this.msgalert2 = "<div class='alert alert-success' id='msgalert'>Vos modifications ont été enregistrées avec succès</div>";
					}
					if(value['response'] == 'no'){
						this.msgalert2 = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
}
