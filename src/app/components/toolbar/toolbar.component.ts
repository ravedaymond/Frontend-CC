import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toolbarTitle: string = "Application";

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  toolbarSnackbar() {
    this.snackBar.open("This is a help message.", "Dismiss", {
      verticalPosition: "top"
    });
  }

}
