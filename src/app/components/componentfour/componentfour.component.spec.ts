import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentfourComponent } from './componentfour.component';

describe('ComponentfourComponent', () => {
  let component: ComponentfourComponent;
  let fixture: ComponentFixture<ComponentfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
