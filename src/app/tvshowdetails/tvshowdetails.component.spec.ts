import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowdetailsComponent } from './tvshowdetails.component';

describe('TvshowdetailsComponent', () => {
  let component: TvshowdetailsComponent;
  let fixture: ComponentFixture<TvshowdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
