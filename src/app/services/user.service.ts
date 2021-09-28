import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface User {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  ip_address: string
}

const apiUrl = "http://localhost:5000";
const apiPath = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(apiUrl+apiPath);
  }

}
