import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
	showconnectionform = true;
	showinscriptionform = false;
	connectionForm:FormGroup;
	inscriptionForm:FormGroup;
  constructor(private fb : FormBuilder){ 
	this.createForm();
  }

  ngOnInit() {
  }

	showform(n){
		if(n==1){
			this.showconnectionform=true;
			this.showinscriptionform=false;
		}else{
			this.showconnectionform=false;
			this.showinscriptionform=true;
		}
	}
	
	createForm(){
		this.connectionForm = this.fb.group({
			connectionEmail:['',Validators.required],
			connectionPassword:['',Validators.required],
		});
		
		this.inscriptionForm = this.fb.group({
			inscriptionEmail:['',Validators.required],
			inscriptionPassword:['',Validators.required],
			inscriptionRPassword:['',Validators.required],
		});
	}
	
	connectionSubmit(){
		
	}
}
