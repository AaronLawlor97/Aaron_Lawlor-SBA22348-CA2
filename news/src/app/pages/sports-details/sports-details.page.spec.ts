import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsDetailsPage } from './sports-details.page';

describe('SportsDetailsPage', () => {
  let component: SportsDetailsPage;
  let fixture: ComponentFixture<SportsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SportsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
