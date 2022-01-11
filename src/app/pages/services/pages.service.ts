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

  private pedido$: BehaviorSubject <Pedido> = new BehaviorSubject<Pedido>(this.pedido)

  get getPedido(){
    return this.pedido$.asObservable();
  }

  set setTicket( item: Producto){
    this.pedido.productos.push(item);
    this.count = this.pedido.productos.length;
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
