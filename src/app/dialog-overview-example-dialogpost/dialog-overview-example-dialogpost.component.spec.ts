import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialogpostComponent } from './dialog-overview-example-dialogpost.component';

describe('DialogOverviewExampleDialogpostComponent', () => {
  let component: DialogOverviewExampleDialogpostComponent;
  let fixture: ComponentFixture<DialogOverviewExampleDialogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverviewExampleDialogpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExampleDialogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
