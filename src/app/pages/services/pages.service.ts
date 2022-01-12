import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { ApiProducto, ApiTipo } from '../interface';
import { Pedido, Producto, Tipo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public pedido: Pedido = new Pedido();
  public count: number = 0;
  public total: number = 0;

  private pedido$: BehaviorSubject <Pedido> = new BehaviorSubject<Pedido>(this.pedido)

  get getPedido(){
    return this.pedido$.asObservable();
  }

  set setPedido(item: Pedido){
    this.pedido$.next(item);
  }

  set setItem( item: Producto){
    this.pedido.productos.push(item);
    this.count = this.pedido.productos.length;
    this.total = this.pedido.productos.reduce((suma,d)=> suma + d.valor, 0);
  }

  set deletItem(item: number){
    this.pedido.productos.splice(item,1);
    this.setPedido = this.pedido;
    this.count = this.pedido.productos.length;
    this.total = this.pedido.productos.reduce((suma,d)=> suma + d.valor, 0);
  }



  constructor( private api: ApiService) { }

  getAllProducts(){
    return this.api.get<ApiProducto[]>('producto')
    .pipe(map( resp =>{
      return resp.map(d => Producto.productoJson(d))
    }));
  }

  getTipoProducts(){
    return this.api.get<ApiTipo[]>('producto/tipo/producto')
    .pipe(map( resp =>{
      return resp.map(d => Tipo.tipoJson(d))
    }));
  }
}
