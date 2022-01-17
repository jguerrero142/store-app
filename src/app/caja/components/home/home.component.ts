import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { CajaService } from '../../services/caja.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ruta: string;
  public suscripcion: Subscription[] = [];
  
  constructor(private router: Router,
              private shared: SharedService,
              private service: CajaService) {

                this.ruta = this.router.url
                this.shared.setRuta = this.ruta;

                  this.suscripcion.push(
                  this.service.getAllReserva().subscribe(r=>{ 
                  this.service.setReservas = r.filter(
                  (p) => p.pedido_estado == 1 || p.pedido_estado == 2);
                  }));

                  this.suscripcion.push(
                    this.service.getAllFactura().subscribe(d=>{
                      this.service.setFacturas = d;
                      console.log(d)
                    }));
                  
                  // this.suscripcion.push(
                  // this.service.getAllUser().subscribe(d=>{
                  // this.service.setUsers = d;
                  // }));

                  // this.suscripcion.push(
                  // this.service.getAllMetodo().subscribe(d=>{
                  //   this.service.setMetodo = d;
                  // }));
              
                  this.suscripcion.push(
                  this.service.getAllTicket().subscribe(d=>{
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
                  }));
               }

  ngOnInit(): void {
  }

}
