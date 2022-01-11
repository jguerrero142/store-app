import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { ApiProducto, ApiTipo } from '../interface';
import { Producto, Tipo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

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
