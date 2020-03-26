import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveLoginForm: FormGroup;

  @ViewChild('templateLoginForm', { static: true }) tempLoginForm: NgForm;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.reactiveLoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$")]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  // reactive form 
  onSubmit() {
    this.authService.loginUser(this.reactiveLoginForm.value.email, this.reactiveLoginForm.value.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((res) => {
        this.router.navigate(['/login']);
      })

    this.reactiveLoginForm.reset();
  }

  // template form
  onSubmitLogin() {
    this.authService.loginUser(this.tempLoginForm.value.email, this.tempLoginForm.value.password)
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(res => {
        this.router.navigate(['/login']);
      })

    this.tempLoginForm.reset();
  }



}
