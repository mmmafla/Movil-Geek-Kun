import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFavoritePage } from './register-favorite.page';

describe('RegisterFavoritePage', () => {
  let component: RegisterFavoritePage;
  let fixture: ComponentFixture<RegisterFavoritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
