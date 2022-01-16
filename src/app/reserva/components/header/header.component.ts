import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from '../../../core/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  
  public total: number= 0;
  public totalfa: number = 0;
  public suscripcion: Subscription [] = [];

  constructor( public service: ReservaService,
               public store: StoreService
              ) {
                this.getTotalFacturado();
                this.getTotalReservas();
              }

  ngOnInit(): void {
  }

  getTotalReservas(){
    this.suscripcion.push(
      this.service.getReservas.subscribe(res =>{
        const p = res.filter(d=> d.pedido_estado == 1 || d.pedido_estado == 2 );
          this.total = p.reduce((suma,d)=> suma + d.valor,0);
          console.log(this.total)})
    );
  }

  getTotalFacturado(){
    this.suscripcion.push(
      this.service.getFacturas.subscribe(res=>{
        if(res.length > 0){
          const t = res.filter(d => d.estado_factura == 3 || d.estado_factura == 4 || d.estado_factura == 5 );
          this.totalfa = t.reduce((suma,d)=> suma + d.valor, 0);
          console.log(this.totalfa)
        }
      })
    );
  }

  onBack(): void {
    console.log('onBack');
  }

  ngOnDestroy(): void {
    this.suscripcion.forEach(s => s.unsubscribe());
  }

}
