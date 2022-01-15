import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/core/store.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { ApiProducto, ApiTipo } from '../interface';
import { Pedido, Producto, Tipo, Data } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public pedido: Pedido = new Pedido();
  public dataP: Data = new Data;
  public count: number = 0;
  public total: number = 0;

  private pedido$: BehaviorSubject <Pedido> = new BehaviorSubject<Pedido>(this.pedido)

  get getPedido(){
    return this.pedido$.asObservable();
  }

  set setPedido(item: Pedido){
    this.pedido$.next(item);
    console.log(this.pedido$)
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



  constructor( private api: ApiService,
               private store: StoreService) { }

  sendPedido(user: number, pedido: any){
  return this.api.post(`pedido/${user}`,pedido)
  .pipe(map( res =>{
   return Data.dataJson(res);
   }));
  }

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

    sendPedidoApi(item: boolean){
        const user = this.store.user.id_user!
        const pedido = {
          id_user: user,
          valor: this.total,
          servicio: item,
          user_update: user
        }
      this.sendPedido(user, pedido).subscribe(res =>{
        this.dataP = res;
        if(this.dataP != null){
          this.setItemsApi();
        }
        
      })
        
      }

      setItemsApi(){
        const user = this.store.user.id_user
        this.pedido.productos.map((item) =>{
          const ticket = {
          user_ticket: user,
          Producto: item.id,
          id_pedido: this.dataP.id_pedido,
          producto_tipo: item.producto_tipo,
          };
          return this.api.post(`ticket/`,ticket)
          .subscribe(res =>{
            console.log(res)
          })
        })
        this.pedido.productos = []
        this.count = 0;
        this.total = 0;
        this.setPedido = this.pedido;
      }
}
