import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  map } from 'rxjs/operators';
import { StoreService } from 'src/app/core/store.service';
import { Reserva, Factura, Ticket } from 'src/app/reserva/models';
import { ApiService } from 'src/app/shared/services/api.service';
import { ApiAllFactura, ApiAllReserva, ApiAllTicket,ApiMetodoPago } from '../interface';
import { User, MetodoPago } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  public reserva: Reserva [] = [];
  public factura: Factura[] = [];
  public users: User[] = [];
  public metodo: MetodoPago[] = [];
  public ticket: Ticket = new Ticket();

  private reserva$: BehaviorSubject<Reserva[]> = new BehaviorSubject<Reserva[]>(this.reserva);

  get getReservas(){
    return this.reserva$.asObservable();
  }

  set setReservas(item: Reserva[]){
    this.reserva = item;
    this.reserva$.next(this.reserva);
    // console.log(this.reserva$)
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

  private users$: BehaviorSubject<User[]>= new BehaviorSubject<User[]>(this.users);

  get getUsers(){
    return this.users$.asObservable();
  }
  set setUsers(item: User[]){
    this.users = item;
    this.users$.next(this.users);
    // console.log(this.users$);
  }

  private metodo$: BehaviorSubject<MetodoPago[]>= new BehaviorSubject<MetodoPago[]>(this.metodo);

  get getMetodos(){
    return this.metodo$.asObservable();
  }

  set setMetodo(item: MetodoPago[]){
    this.metodo = item;
    this.metodo$.next(this.metodo);
    // console.log(this.metodo$);
  }

  constructor(private api: ApiService,
              private store: StoreService) { }

              setFacturaApi( user: number, data: any){
                return this.api.post(`factura/${user}`, data)
                .subscribe(res => {console.log(res)})
              }

              getAllReserva(){
                return this.api.get<ApiAllReserva[]>(`pedido`)
                .pipe(map ( d =>{
                  return d.map( d => Reserva.reservaJson(d))
                }));
              }
          
              getAllFactura(){
                return this.api.get<ApiAllFactura[]>(`factura/`)
                .pipe(map( d =>{
                  return d.map( d => Factura.facturaJson(d))
                }));
              }
          
              getAllTicket(){
                return this.api.get<ApiAllTicket[]>(`ticket`)
                .pipe(map( d =>{
                  return d.map( d =>Ticket.ticketJson(d))
                }));
              }

              getAllUser(){
                return this.api.get<ApiAllTicket[]>(`user`)
                .pipe(map( d =>{
                  return d.map( d =>User.userJson(d))
                }));
              }

              getAllMetodo(){
                return this.api.get<ApiMetodoPago[]>(`factura/metodo-pago/get`)
                .pipe(map( d =>{
                  return d.map( d =>MetodoPago.metodoJson(d))
                }));
              }

              deletReservaApi(id: number){
                return this.api.delete(`pedido/${id}`);
              }
          
              
}
