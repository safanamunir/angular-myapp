import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {
 private url =   'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { 

  }

  getPosts(){
   return this.http.get(this.url)
  .pipe(catchError(this.handleError));

  }

  createPost(post: any){
   return this.http.post(this.url, JSON.stringify(post));
  }

  deletePost(id: any){
  return this.http.delete(this.url + '/' + id)
  //.pipe(catchError(this.handleError)); // applying the error handling method using the catchError() operator
  }

  //Error Handling Method
  handleError(error: HttpErrorResponse) {
   // let errorMessage = 'Unknown error!';
    //if (error.error instanceof ErrorEvent) {
      // Client-side errors
   //   errorMessage = `Error: ${error.error.message}`;
    //} else {
      // Server-side errors
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //}
  //  window.alert(errorMessage);
    return throwError(error);
  }
}
