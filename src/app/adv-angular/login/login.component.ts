import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;

  constructor(private fb: FormBuilder, public authService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if(this.authService.login(username,password)){
        this.loginForm.reset();
        this.router.navigate(['/adv-angular/parent']);
      }else{
        console.log("Invalid Credentials");
        
      }

    } else {
      console.log("Invalid Credentials");
      alert("Invalid Credentials");
    }
  }

}
