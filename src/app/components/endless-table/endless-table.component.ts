import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-endless-table',
  templateUrl: './endless-table.component.html',
  styleUrls: ['./endless-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EndlessTableComponent implements OnInit {

  // Table Values
  tableData: any = [];
  enabledColumns: string[] = ["id", "first_name", "last_name"];

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    console.log("endless-table.getUsers()");
    this.userService.getUsers().subscribe(data => {
      this.tableData = data;
    })
  }

}
