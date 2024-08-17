import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  login(username:string,password:string){
    console.log("Username:", username , "Password:" , password);
    if(username === 'vivek' && password === '123' ){
      this.isLoggedIn = true;
      console.log("Logged In?",this.isLoggedIn);
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
