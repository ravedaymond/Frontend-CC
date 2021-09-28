import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabLoadTimes: Date[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  tabClick(event: any) {
    this.getTimeLoaded(event.index);
    console.log("Tab clicked", event.index);
  }

  // TODO: For lazy loading - doesn't work for initial tab though.
  private getTimeLoaded(index: number) {
    if(!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }

  scrollHandler(e:any) {
    console.log(e);
  }

}
