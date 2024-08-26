import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder, public authService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.setAndPatchValues();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  setAndPatchValues() {
    const userData = {
      username: 'vivek',
      password: '123',
    };

    this.loginForm.patchValue({
      username: userData.username,
      password: userData.password
    });

    this.loginForm.setValue(userData);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevents default form submission...
    console.log("Form Validity:", this.loginForm.valid); // Ensures that form is valid or not...
    console.log("Form Errors:", this.loginForm.errors); // Ensures that is there any error or not...
    if (this.loginForm.valid) {

      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if (this.authService.login(username, password)) { // checks if credentials are same...
        console.log("Login successful"); // Prints only when credentials are valid...
        this.loginForm.reset(); // To reset the form
        this.router.navigate(['/adv-angular/parent']); // Redirect to parent page...
      } else {
        console.log("Invalid Credentials"); // Prints only when credentials are invalid...
        alert("Invalid Credentials");
      }

    } else {
      console.log("Form is invalid");
    }
  }

}
