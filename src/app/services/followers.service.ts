import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { NotFoundError } from '../Errors/not-found.error';
import { NullValueError } from '../Errors/null-value.error';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  
  usernameEmitter = new EventEmitter<string>()

  constructor(private http: HttpClient) {} 

  fetchAllFollowers(username: string){
    this.usernameEmitter.emit(username)
    return this.http.get('https://api.github.com/users/'+username+'/followers').pipe(catchError(this.handleError))
  }

  fetchUserProfile(username: string){
    this.usernameEmitter.emit(username)
    return this.http.get('https://api.github.com/users/'+username).pipe(catchError(this.handleError))
  }

  fetchRepositories(username: string){
    this.usernameEmitter.emit(username)
    return this.http.get('https://api.github.com/users/'+username+'/repos').pipe(catchError(this.handleError))
  }

  private handleError(error){
    if (error.status === 404){
      return throwError(new NotFoundError(error))
    }
  }

  

  
  

}
