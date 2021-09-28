import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByFormComponent } from './search-by-form.component';

describe('SearchByFormComponent', () => {
  let component: SearchByFormComponent;
  let fixture: ComponentFixture<SearchByFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
