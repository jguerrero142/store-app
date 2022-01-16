import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Ticket, Reserva } from '../../models/';

@Component({
  selector: 'app-table-reserva',
  templateUrl: './table-reserva.component.html',
  styleUrls: ['./table-reserva.component.css']
})
export class TableReservaComponent implements OnInit {

  public expandSet = new Set<number>();
  public displayedColumns: string[] = ['Producto', 'Valor'];
  public ticket: Ticket[] = [];
  public isLoadingOne = false;
  public isVisible = false;
  public isDisabled = false;
  public switchValue = false;
  public loading = false;
  constructor( public service: ReservaService,
    ) { }

  ngOnInit(): void {
  }

  onExpandChange(data: Reserva, checked: boolean): void {
    if (checked) {
      this.expandSet.add(data.id_pedido);
      this.ticket = data.ticket!.filter((d) => (d.id_pedido = data.id_pedido));
    } else {
      this.expandSet.delete(data.id_pedido);
    }
  }

  
  deletItem(index: number , pedido: number){
    this.service.deletReserva = index;
    this.service.deletReservaApi(pedido).subscribe(resp=>{
      console.log(resp)
    })
  }

}
