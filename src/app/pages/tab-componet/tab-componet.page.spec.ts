import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComponetPage } from './tab-componet.page';

describe('TabComponetPage', () => {
  let component: TabComponetPage;
  let fixture: ComponentFixture<TabComponetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
