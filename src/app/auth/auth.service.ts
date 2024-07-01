import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(username:string,password:string){
    
    if(username == 'user' && password == 'pass' ){
      this.isLoggedIn = true;
      return true
    }
    return false;
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/adv-angular/login'])
  }

  constructor(public router: Router) { }
}
