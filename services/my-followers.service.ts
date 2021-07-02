import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyFollowersService {
  private url = "http://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: HttpClient) { }

  getFollowers(){
   return this.http.get(this.url)
   .pipe(catchError(this.handleError));

  }

  handleError(error: HttpErrorResponse){
    return throwError(error);

  }
}
