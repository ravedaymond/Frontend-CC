import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form Validators
  email = new FormControl('', [Validators.email]);

  p: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getEmailErrorMessage(){
    if(this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Enter a valid email' : '';
  }

  login(request: any) {
    console.log(request);
    // this.authService.login(request);
  }

}
