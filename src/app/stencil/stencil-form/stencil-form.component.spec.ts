/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StencilFormComponent } from './stencil-form.component';

describe('StencilFormComponent', () => {
  let component: StencilFormComponent;
  let fixture: ComponentFixture<StencilFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
