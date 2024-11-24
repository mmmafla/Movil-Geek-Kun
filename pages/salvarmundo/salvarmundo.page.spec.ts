import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalvarmundoPage } from './salvarmundo.page';

describe('SalvarmundoPage', () => {
  let component: SalvarmundoPage;
  let fixture: ComponentFixture<SalvarmundoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarmundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
