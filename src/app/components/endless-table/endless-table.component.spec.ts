import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessTableComponent } from './endless-table.component';

describe('EndlessTableComponent', () => {
  let component: EndlessTableComponent;
  let fixture: ComponentFixture<EndlessTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndlessTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
