import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCreateComponent } from './professor-create.component';

describe('ProfessorCreateComponent', () => {
  let component: ProfessorCreateComponent;
  let fixture: ComponentFixture<ProfessorCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorCreateComponent]
    });
    fixture = TestBed.createComponent(ProfessorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
