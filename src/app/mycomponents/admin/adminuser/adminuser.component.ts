import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
	showsection:any = -1;
	allusers:any;
	oneuser:any;
  constructor(private ms:MyserviceService) {
		this.showsection = 1
		this.getAllUsers();
   }

  ngOnInit() {
  }

	getAllUsers(){
		var query = {
			'action':'getallusers'
		};
		this.ms.mypostquery(query,'apiadmin');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
			if(value != null && Object.keys(value).length !== 0){
				if(value['response'] == 'gotusers'){
					this.allusers = value['data'];
				}
			}
		});
		});
	}
	
	deleteOneUser(key){
		var query = {
			'action':'deleteoneuser',
			'id' : this.allusers[key].id
		};
		
		this.ms.mypostquery(query,'apiadmin');
		this.ms.result$.subscribe((value) => {
			this.ms.result$.subscribe((value) => {
				if(value != null && Object.keys(value).length !== 0){
					if(value['response'] == 'done'){
						//this.allphotos.splice(key, 1);
						this.allusers = value['data'];
					}
				}
			});
		});
	}
	
	editOneUser(key){
		this.oneuser = this.allusers[key];
		this.showsection = 2;
	}
	
	goBack(){
		this.showsection = 1;
	}
}
