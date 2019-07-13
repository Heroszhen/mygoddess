import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
	//baseUrl = "http://zhenyang.fr/goddess/backend/";
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
	  console.log(error);
	  // return an observable with a user friendly message
	  return throwError('Error! something went wrong.');
  }
  
    
  postQuery(query:{},url): Observable<{}> {
		return this.http.post(`${this.baseUrl}`+url, query).pipe(
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
	document.cookie = name+"="+JSON.stringify(valuejson);  
  }
  
  getCookie(name){
	var myarray = document.cookie.split("; ");
	for(var i =0; i<myarray.length;i++){
		var courantarray = myarray[i].split('=');
		if(courantarray[0] == name){
			return;
		}
	}
	return "no";
  }
  
  deleteCookie(name){
	document.cookie = name+'=;max-age=-99';
  }
}

