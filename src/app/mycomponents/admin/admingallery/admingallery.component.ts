import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MyserviceService } from '../../../myservice/myservice.service';
import { Photo } from '../../../myclasses/Photo';

@Component({
  selector: 'app-admingallery',
  templateUrl: './admingallery.component.html',
  styleUrls: ['./admingallery.component.css']
})
export class AdmingalleryComponent implements OnInit {
	showsection:any = -1;
	allphotos:any;
	photo1 = new Photo("editonephoto");
	photo2 = new Photo("addonephoto");
	msgalert:any;
	constructor(private activatedroute:ActivatedRoute,private router:Router,private ms:MyserviceService){
		this.getAllPhotos();
	}

  ngOnInit() {
	this.activatedroute.params.subscribe(params =>{
		this.showsection = params['id']
	});
  }

	getAllPhotos(){
		var query = {
			'action':'allphotos'
		};
		this.ms.mypostquery(query,'api');
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
	
	deleteOnePhoto(key){
		var query = {
			'action':'deleteonephoto',
			'id' : this.allphotos[key].id
		};
		
		this.ms.mypostquery(query,'apiadmin');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						//this.allphotos.splice(key, 1);
						this.allphotos = value['data'];
					}
				}
			});
		});
	}
	
	editOnePhoto(key){
		this.photo1.id_allphotos = key;
		this.photo1.id = this.allphotos[key].id;
		this.photo1.link = this.allphotos[key].link;
		this.showsection = 2;
	}
	
	editPhoto(){
		this.msgalert = "<div></div>";
		this.ms.mypostquery(this.photo1,'apiadmin');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allphotos[this.photo1.id_allphotos].link = this.photo1.link;
						this.msgalert = "<div class='alert alert-success'>Vos modifications ont été enregistrées avec succès</div>";
					}
					if(value['response'] == 'no'){
						this.msgalert = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
	
	goBack(){
		this.showsection = 1;
	}
	
	addPhoto(){
		this.msgalert = "<div></div>";
		this.photo2.action = "addonephoto";
		this.ms.mypostquery(this.photo2,'apiadmin');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						this.allphotos = value['data'];
						this.msgalert = "<div class='alert alert-success'>Vos modifications ont été enregistrées avec succès</div>";
					}
					if(value['response'] == 'no'){
						this.msgalert = "<div class='alert alert-danger'>Il y a des erreurs</div>"
					}
				}
			});
		});
	}
}
