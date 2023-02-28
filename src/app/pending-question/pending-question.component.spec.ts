import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingQuestionComponent } from './pending-question.component';

describe('PendingQuestionComponent', () => {
  let component: PendingQuestionComponent;
  let fixture: ComponentFixture<PendingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
