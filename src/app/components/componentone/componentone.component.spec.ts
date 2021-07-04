import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentoneComponent } from './componentone.component';

describe('ComponentoneComponent', () => {
  let component: ComponentoneComponent;
  let fixture: ComponentFixture<ComponentoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
