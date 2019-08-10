import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
	result$ = new BehaviorSubject({});
	baseUrl = "http://localhost/goddess/backend/";
	//baseUrl = "https://zhenyang.fr/goddess/backend/";
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
		//console.log(error);
	  // return an observable with a user friendly message
	  return throwError('Error! something went wrong.');
  }
  
    
  postQuery(query:{},url): Observable<{}> {
		let type = "application/json;charset=UTF-8";
		let myheaders = new HttpHeaders({'Content-Type':type});
		let options = {headers:myheaders};
		return this.http.post(`${this.baseUrl}`+url, query,options).pipe(
		  catchError(this.handleError)
		); 
  }
  
  mypostquery(obj,url){
    this.postQuery(obj,url).subscribe(
      (res) => {
        this.result$.next(res);
      },
      (err)=>{}
    );
  }
  
  //cookies
  setCookie(name,valuejson){
	document.cookie = name+"="+valuejson;  
	//JSON.stringify(valuejson)
  }
  
  getCookie(name){
	var myarray = document.cookie.split("; ");
	for(var i =0; i<myarray.length;i++){
		var courantarray = myarray[i].split('=');
		if(courantarray[0] == name){
			return courantarray[1];
		}
	}
	return "no";
  }
  
  deleteCookie(name){
	document.cookie = name+'=;max-age=-99';
  }
}

