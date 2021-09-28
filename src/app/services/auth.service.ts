import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = null;

  constructor() { }

  login(request: any) {
    console.log(request.email, request.password);
  }

  register() {
    console.log("register clicked > route to to registration"); // Maybe just change form to registration
  }

  forgot() {
    console.log("forgot clicked > route to forgot"); // Maybe just change form to forgot rather than route
  }

}
