import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationsExampleDialogRegisterComponent } from './dialog-animations-example-dialog-register.component';

describe('DialogAnimationsExampleDialogRegisterComponent', () => {
  let component: DialogAnimationsExampleDialogRegisterComponent;
  let fixture: ComponentFixture<DialogAnimationsExampleDialogRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnimationsExampleDialogRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAnimationsExampleDialogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
