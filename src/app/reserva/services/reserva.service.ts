import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { StoreService } from '../../core/store.service';
import { ApiReserva, ApiFactura, ApiTicket } from '../interface/';
import { map } from 'rxjs/operators';
import { Reserva, Factura, Ticket } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  public reserva: Reserva [] = [];
  public factura: Factura[] = [];
  public ticket: Ticket = new Ticket();

  private reserva$: BehaviorSubject<Reserva[]> = new BehaviorSubject<Reserva[]>(this.reserva);

  get getReservas(){
    return this.reserva$.asObservable();
  }

  set setReservas(item: Reserva[]){
    this.reserva = item;
    this.reserva$.next(this.reserva);
    console.log(this.reserva$)
  }

  set deletReserva(item: number){
    this.reserva.splice(item,1);
    this.reserva$.next(this.reserva);
    console.log(this.reserva$)
  }

  private factura$: BehaviorSubject<Factura[]>= new BehaviorSubject<Factura[]>(this.factura);

  get getFacturas(){
    return this.factura$.asObservable();
  }

  set setFacturas(item: Factura[]){
    this.factura = item;
    this.factura$.next(this.factura);
    console.log(this.factura$);
  }

  constructor(private api: ApiService,
              private store: StoreService) {}

    getAllReservaUsuario(){
      const user = this.store.user.id_user
      return this.api.get<ApiReserva[]>(`pedido/get/${user}`)
      .pipe(map( d =>{
        return d.map( d => Reserva.reservaJson(d))
      }));
    }

    getAllFacturaUsuario(){
      const user = this.store.user.id_user
      return this.api.get<ApiFactura []>(`factura/get/${user}`)
      .pipe(map( d =>{
        return d.map( d => Factura.facturaJson(d))
      }));
    }

    getAllTicketUsuario(){
      const user = this.store.user.id_user
      return this.api.get<ApiTicket[]>(`ticket/user/${user}`)
      .pipe(map( d =>{
        return d.map( d =>Ticket.ticketJson(d))
      }));
    }

    deletReservaApi(id: number){
      return this.api.delete(`pedido/${id}`);
    }
}
