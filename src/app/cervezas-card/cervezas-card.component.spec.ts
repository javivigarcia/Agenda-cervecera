import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezasCardComponent } from './cervezas-card.component';

describe('CervezasCardComponent', () => {
  let component: CervezasCardComponent;
  let fixture: ComponentFixture<CervezasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervezasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
