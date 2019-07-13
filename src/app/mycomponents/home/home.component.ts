import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../myservice/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	page = "home";
  constructor(private router: Router,private ms : MyserviceService) { 
	if(this.ms.getCookie('user') == "no")this.router.navigate(['/sign']);
  }

  ngOnInit() {
  }

}
