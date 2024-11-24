import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StwPage } from './stw.page';

describe('StwPage', () => {
  let component: StwPage;
  let fixture: ComponentFixture<StwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
