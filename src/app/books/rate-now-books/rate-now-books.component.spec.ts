import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateNowBooksComponent } from './rate-now-books.component';

describe('RateNowBooksComponent', () => {
  let component: RateNowBooksComponent;
  let fixture: ComponentFixture<RateNowBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateNowBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateNowBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
