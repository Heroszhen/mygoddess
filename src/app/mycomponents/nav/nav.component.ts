import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice/myservice.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	@Input() father:string;
	id:any;
	connexion = 0;
  constructor(private ms : MyserviceService,private router: Router) { 
	this.id = this.ms.getCookie('user')
	if(this.id == 'no')this.connexion = 0;
	else this.connexion = 1;
  }

  ngOnInit() {
  }
	signout(){
		this.ms.deleteCookie('user');
		this.router.navigate(['/sign']);
	}
}
