import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {User, UserService} from "../../services/user.service";

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit {

  // Table Values
  tableData: User[] = [];
  enabledColumns = ["id", "first_name", "last_name", "email", "ip_address"];

  // Paginator Defaults
  length = -1;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100, 200];

  // MatPaginator Output
  // pageEvent: PageEvent | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getPaginatedUsers(0, this.pageSize);
  }

  private getPaginatedUsers(start: number, end: number): void {
    console.log("paginated-table.getPaginatedUsers()");
    this.userService.getUsers().subscribe(data => {
      this.length = Math.ceil(data.length);
      this.tableData = data.slice(start, end);
    });
  }

  paginatorEvent(event: PageEvent): void {
    console.log(event); // {previousPageIndex: 0, pageIndex: 1, pageSize: 10, length: 100}
    this.pageSize = event.pageSize;
    let start = event.pageIndex * this.pageSize;
    let end = start+this.pageSize;
    this.getPaginatedUsers(start, end);
  }

}
