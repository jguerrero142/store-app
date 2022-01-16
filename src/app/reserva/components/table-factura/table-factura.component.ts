import { Component, OnInit } from '@angular/core';
import { Factura, Ticket } from '../../models';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-table-factura',
  templateUrl: './table-factura.component.html',
  styleUrls: ['./table-factura.component.css']
})
export class TableFacturaComponent implements OnInit {
  public expandSet = new Set<number>();
  public displayedColumns: string[] = ['Producto', 'Valor'];
  public ticket: Ticket[] = [];
  public isLoadingOne = false;
  public isVisible = false;
  public isDisabled = false;
  public switchValue = false;
  public loading = false;

  constructor(public service: ReservaService) { }

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
