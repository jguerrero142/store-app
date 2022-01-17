import { Component, OnInit } from '@angular/core';
import { Factura, Ticket } from '../../models';
import { CajaService } from '../../services/caja.service';

@Component({
  selector: 'app-table-factura',
  templateUrl: './table-factura.component.html',
  styleUrls: ['./table-factura.component.css']
})
export class TableFacturaComponent implements OnInit {
  public expandSet = new Set<number>();
  public ticket: Ticket[] = [];

  constructor(public service: CajaService) { }

  ngOnInit(): void {
  }

  onExpandChange(data: Factura, checked: boolean): void {
    if (checked) {
      this.expandSet.add(data.id_pedido);
      this.ticket = data.ticket!.filter((d) => (d.id_pedido = data.id_pedido));
    } else {
      this.expandSet.delete(data.id_pedido);
    }
  }

}
