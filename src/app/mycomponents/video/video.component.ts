import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../myservice/myservice.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	page = "video";
	allvideos:any;
	showsection1 = true;
	showsection2 = false;
	onevideo:any;
  constructor(private router: Router,private ms : MyserviceService) { 
	this.getAllVideos();
  }

  ngOnInit() {
  }

	getAllVideos(){
		var query = {
			'action':'allvideos'
		};
		this.ms.mypostquery(query,'api');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
			if(value != null && Object.keys(value).length !== 0){
				if(value['response'] == 'gotvideos'){
					this.allvideos = value['data'];
				}
			}
		});
		});
	}
	showonevideo(){
		alert("llll");
	}
}
