import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ReservaService } from '../../services/reserva.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public ruta: string;
  public suscripcion: Subscription[] = [];
  
  constructor(private router: Router,
              private service: ReservaService,
              private shared: SharedService) {

    this.ruta = this.router.url
    this.shared.setRuta = this.ruta;

    this.suscripcion.push(
    this.service.getAllReservaUsuario().subscribe(r=>{ 
      this.service.setReservas = r;
      }));
    this.suscripcion.push(
      this.service.getAllFacturaUsuario().subscribe(d=>{
        this.service.setFacturas = d;
      }));

    this.suscripcion.push(
      this.service.getAllTicketUsuario().subscribe(d=>{
        if(d.length >0){console.log(d)}
        this.service.reserva.forEach((item, index)=>{
          const t = d.filter(d=> d.id_pedido == item.id_pedido);
          this.service.reserva[index].ticket = t;
        });
        this.service.setReservas = this.service.reserva;

        this.service.factura.forEach((item, index)=>{
          const f = d.filter(d=> d.id_pedido == item.id_pedido);
          this.service.factura[index].ticket = f;
        })
        this.service.setFacturas = this.service.factura;
      })
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.suscripcion.forEach(d=> d.unsubscribe());
  }

}
