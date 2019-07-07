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
  constructor(private router: Router,private ms : MyserviceService) { 
	if(this.ms.getCookie('user') == "no")this.router.navigate(['/sign']);
  }

  ngOnInit() {
  }

}
