/* 3813ICT - week3 - demo */
/*
  login() - passes a username and password to a server API for authentication and response
  isLoggedin() - tests if a user is logged in. return true of false
  setcurrentuser() - add user record to localstorage
  getcurrentuser() - returns user details from localstorage
  logout() - clears local storage of user details and re-routes to root of site
  */

import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private server = environment.apiserver;
  private port = environment.apiserverport;

  login(email:string,pwd:string):Observable<User>{
    // http post request to the server. Returns an observable.
    return this.http.post<User>('http://' + this.server + ':' + this.port +'/api/login', { email: email, pwd: pwd });
  }

  //Test is user is logged in locally
  isloggedin():boolean{
   if (sessionStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  } 
  // save user data to localstorage
   setCurrentuser(newuser:User){
    sessionStorage.setItem('currentUser',JSON.stringify(newuser));
  }
  //Read user from localstorage
   getCurrentuser(){
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  //clear localstorage and redirect to home.
   logout(){
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl('/');
  }
}
