import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-admingallery',
  templateUrl: './admingallery.component.html',
  styleUrls: ['./admingallery.component.css']
})
export class AdmingalleryComponent implements OnInit {
	showsection:any = -1;
	allphotos:any;
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
						this.allphotos.splice(key, 1);
					}
				}
			});
		});
	}
}
