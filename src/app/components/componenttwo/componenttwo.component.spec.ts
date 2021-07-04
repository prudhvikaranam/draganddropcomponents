import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttwoComponent } from './componenttwo.component';

describe('ComponenttwoComponent', () => {
  let component: ComponenttwoComponent;
  let fixture: ComponentFixture<ComponenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
