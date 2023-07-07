import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechDetailsPage } from './tech-details.page';

describe('TechDetailsPage', () => {
  let component: TechDetailsPage;
  let fixture: ComponentFixture<TechDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
