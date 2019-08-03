import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MyserviceService } from '../../myservice/myservice.service';
import { Router } from '@angular/router';

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
	resultapi = "";
  constructor(private fb : FormBuilder, private ms : MyserviceService,private router: Router){ 
	//if(this.ms.getCookie('user') != "no")this.router.navigate(['/home']);
	this.createForm();
  }

  ngOnInit() {
  }

	showform(n){
		this.resultapi = "";
		if(n==1){
			this.showconnectionform=true;
			this.showinscriptionform=false;
		}else{
			this.showconnectionform=false;
			this.showinscriptionform=true;
		}
	}
	
	checkPasswords(group: FormGroup) { // here we have the 'passwords' group
	  let pass = group.controls.inscriptionPassword.value;
	  let confirmPass = group.controls.inscriptionRPassword.value;
	
		if(pass.length < 5) return {notSame:true};
	  return pass === confirmPass ? null : {notSame: true}; 
	}
	
	createForm(){
		this.connectionForm = this.fb.group({
			connectionEmail:['',[Validators.email,Validators.required]],
			connectionPassword:['',Validators.required],
		});
		
		this.inscriptionForm = this.fb.group({
			inscriptionEmail:['',[Validators.email,Validators.required]],
			inscriptionPassword:['',Validators.required],
			inscriptionRPassword:['',Validators.required],
		},{validator: this.checkPasswords });
	}
	
	connectionSubmit(){
		this.resultapi = "";
		var obj = {
			'email':this.connectionForm.controls.connectionEmail.value,
			'password':this.connectionForm.controls.connectionPassword.value,
			'action':'connection'
		};
		this.ms.mypostquery(obj,'api.php');
		this.ms.result$.subscribe((value) => {
			if(value != null && Object.keys(value).length !== 0){
				if(value['response'] == 'noconnection')this.resultapi = 'Veuillez verifiez votre mail et votre mot de passe';
				if(value['response'] == 'okconnection'){
					this.ms.setCookie('user',value['id']);
					this.router.navigate(['/home']);
				}
			}
		});
	}
	
	inscriptionSubmit(){
		this.resultapi = "";
		var obj = {
			'email':this.inscriptionForm.controls.inscriptionEmail.value,
			'password':this.inscriptionForm.controls.inscriptionPassword.value,
			'action':'inscription'
		};
		this.ms.mypostquery(obj,'api.php');
		this.ms.result$.subscribe((value) => {
			if('response' in value)this.resultapi = value['response'];
		});
	}
}
