import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {User, UserService} from "../../services/user.service";

@Component({
  selector: 'app-search-by-form',
  templateUrl: './search-by-form.component.html',
  styleUrls: ['./search-by-form.component.scss']
})
export class SearchByFormComponent implements OnInit {

  // Form Validators
  firstName = new FormControl('', [Validators.pattern(/^[a-zA-Z]*$/)]);
  lastName = new FormControl('', [Validators.pattern(/^[a-zA-Z]*$/)]);
  emailFull = new FormControl('', [Validators.email]);
  emailPart = new FormControl('', [Validators.pattern(/^[A-Za-z0-9._%-]*$/)])
  ipAddress = new FormControl('', [Validators.pattern(/^([0-9]{1,3}[.]){3}[0-9]{1,3}$/)]);


  exactFirstName: boolean = false;
  exactLastName: boolean = false;
  exactEmail: boolean = false;

  // Table Values
  tableData: User[] = [];
  enabledColumns = ["id", "first_name", "last_name", "email", "ip_address"];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  // search(request: any):void {
  //   console.log(request);
  // }

  search():void {
    let searchReq = {
      exact: {
        firstName: this.exactFirstName,
        lastName: this.exactLastName,
        email: this.exactEmail
      },
      first_name: this.firstName.value,
      last_name: this.lastName.value,
      email: this.exactEmail ? this.emailFull.value : this.emailPart.value,
      ip_address: this.ipAddress.value
    }
    this.filterUsers(searchReq);
  }

  clearResults(): void {
    this.tableData = [];
  }

  private filterUsers(req: any): void {
    let filteredData: User[] = [];
    let emptyReq = req.first_name === '' && req.last_name === '' && req.email === '' && req.ip_address === '';

    if(emptyReq && this.tableData.length !== 0) { // Gate statement
      console.log('No search data provided. Existing data will be kept.');
      return;
    }

    this.userService.getUsers().subscribe(data => {
      if(emptyReq) { // Gate statement
        console.log('No search data was provided. No existing data.');
        this.tableData = data;
        return;
      }
      this.tableData = []; // Clear table data

      // IP Address Filtering -- haven't worked out the regex yet for wildcard (*)
      let ipFilter: boolean;
      if(req.ip_address === '') {
        // Create string[] from ip split by '.'
        // Check against * character when doing check below for === or just free pass on check
      }

      // Testing purposes only, data transfer would be handled by DP layer in web-service and database filtering via StoredProc/Function
      for(let i = 0; i < data.length; i++) {
        const obj = data[i];
        if(
          (req.first_name === '' ? true : (req.exact.firstName ? (obj.first_name.toUpperCase() === req.first_name.toUpperCase()) : (obj.first_name.toUpperCase().includes(req.first_name.toUpperCase()))))
          &&
          (req.last_name === '' ? true : (req.exact.lastName ? (obj.last_name === req.last_name) : (obj.last_name.includes(req.last_name))))
          &&
          (req.email === '' ? true : (req.exact.email ? (obj.email === req.email) : (obj.email.includes(req.email))))
          // &&
          // (!ipFilter ? true : false)
        ) {
          filteredData.push(obj);
        }
      }

      this.tableData = filteredData;
    });
  }

  // Invalid form message handling
  getFirstNameErrorMessage() {
    if(this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.firstName.hasError('pattern') ? 'Can only have letters' : '';
  }

  getLastNameErrorMessage() {
    if(this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.lastName.hasError('pattern') ? 'Can only have letters' : '';
  }

  getEmailErrorMessage(){
    if(this.exactEmail) {
      if(this.emailFull.hasError('required')) {
        return 'You must enter a value';
      }
      return this.emailFull.hasError('email') ? 'Enter a valid email' : '';
    } else {
      if(this.emailPart.hasError('required')) {
        return 'You must enter a value';
      }
      return this.emailPart.hasError('pattern') ? 'Enter a valid partial' : '';
    }
  }

  getIpAddressErrorMessage() {
    if(this.ipAddress.hasError('required')) {
      return 'You must enter a value';
    }
    return this.ipAddress.hasError('pattern') ? 'Enter a valid IPv4' : '';
  }

}
