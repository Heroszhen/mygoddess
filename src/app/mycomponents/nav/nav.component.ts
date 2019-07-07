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

  constructor(private ms : MyserviceService,private router: Router) { }

  ngOnInit() {
  }
	signout(){
		this.ms.deleteCookie('user');
		this.router.navigate(['/sign']);
	}
}
