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
	baseUrl = "http://localhost/goddess/api/";
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
	  console.log(error);
	  // return an observable with a user friendly message
	  return throwError('Error! something went wrong.');
  }
  
    
  postQuery(query:{},url): Observable<{}> {
		return this.http.post(`${this.baseUrl}/url`, query).pipe(
		  catchError(this.handleError)
		); 
  }
  
  myquery(obj,url){
    this.postQuery(obj,url).subscribe(
      (res) => {
        this.result$.next(res);
      },
      (err)=>{}
    );
  }
}

/*


  <?php

	require_once "init.php";
	
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata)){
		$array = json_decode($postdata);
		$query = "insert into message (user,content) values (:user,:content)";
		execRequete($query,[
			":user"=>$array->name,
			":content"=>$array->message
		]);
		echo $array->name;
	}
	
?>s


*/
