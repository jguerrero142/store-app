import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmetodoComponent } from './showmetodo.component';

describe('ShowmetodoComponent', () => {
  let component: ShowmetodoComponent;
  let fixture: ComponentFixture<ShowmetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmetodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
