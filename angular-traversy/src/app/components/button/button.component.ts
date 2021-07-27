import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() text: string|undefined; // var: type|undefined; -- Indicates that we the type may either be a string or undefined.
  @Input() color!: string; // var!: type; -- Indicates that the we are aware the var is not initialized in the constructor and that we will handle it elsewhere.

  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
