import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFacturaComponent } from './table-factura.component';

describe('TableFacturaComponent', () => {
  let component: TableFacturaComponent;
  let fixture: ComponentFixture<TableFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
