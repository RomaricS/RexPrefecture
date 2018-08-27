import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexDetailComponent } from './rex-detail.component';

describe('RexDetailComponent', () => {
  let component: RexDetailComponent;
  let fixture: ComponentFixture<RexDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
