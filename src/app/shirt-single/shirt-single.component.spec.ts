import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtSingleComponent } from './shirt-single.component';

describe('ShirtSingleComponent', () => {
  let component: ShirtSingleComponent;
  let fixture: ComponentFixture<ShirtSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
