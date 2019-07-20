import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../myservice/myservice.service';

@Component({
  selector: 'app-adminnave',
  templateUrl: './adminnave.component.html',
  styleUrls: ['./adminnave.component.css']
})
export class AdminnaveComponent implements OnInit {
	showsection = "";
	showbtnsection = "";
  constructor() { }

  ngOnInit() {
  }

	showsectionbtn(section){
		if(this.showsection == section)this.showsection = "";
		else this.showsection = section;
	}
}
