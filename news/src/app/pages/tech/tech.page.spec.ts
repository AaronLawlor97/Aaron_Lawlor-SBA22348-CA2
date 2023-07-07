import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechPage } from './tech.page';

describe('TechPage', () => {
  let component: TechPage;
  let fixture: ComponentFixture<TechPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
