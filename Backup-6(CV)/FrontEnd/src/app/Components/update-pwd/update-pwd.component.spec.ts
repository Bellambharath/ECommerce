import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePWDComponent } from './update-pwd.component';

describe('UpdatePWDComponent', () => {
  let component: UpdatePWDComponent;
  let fixture: ComponentFixture<UpdatePWDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePWDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
