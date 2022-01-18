import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../core/store.service';
import { CajaService } from '../../services/caja.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public total: number = 0;
  public fiado: number = 0;
  public pago: number = 0;
  constructor(public store: StoreService,
              public service: CajaService) {
                
                
               }

  ngOnInit( ): void {
    this.getTotal();
  }

  getTotal(){
    this.service.getFacturas.subscribe(res=>{
      if (res.length > 0) {
        //Obtiene el TOTAL de VENTA
        const p = res.filter((d) => d.estado_factura == 3);
        this.total = p.reduce((suma, d) => suma + d.valor, 0);

        //Obtiene TOTAL de FIADO
        const f = res.filter((d) => d.estado_valor == 1 && d.estado_factura == 3);
        this.fiado = f.reduce((suma, d) => suma + d.valor, 0);

        //Obtiene TOTAL de EFECTIVO
        const e = res.filter((d) => d.estado_valor == 2 && d.estado_factura == 3);
        this.pago = e.reduce((suma, d) => suma + d.valor, 0);
      }
    })
  }

  cancel(){}
  closeBox(){
    this.service.closeBox();
    this.total = 0;
    this.fiado = 0;
    this.pago = 0;
  }

}
