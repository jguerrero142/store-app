import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MetodoPago } from '../../models';
import { CajaService } from '../../services/caja.service';
import { StoreService } from '../../../core/store.service';
import { Reserva } from '../../../reserva/models/reserva';


@Component({
  selector: 'app-showmetodo',
  templateUrl: './showmetodo.component.html',
  styleUrls: ['./showmetodo.component.css']
})
export class ShowmetodoComponent implements OnInit {
  
  @Input() id!: Reserva;
  isVisible = false;
  estado!: number;
  metodo!: number;
  
  constructor(public service: CajaService,
              private store: StoreService) { }

  ngOnInit(): void {
  }
   
  showModal(){
    this.isVisible = true;
  }

  setFactura(item?: MetodoPago){
    if(item == null){
    this.estado = 1;
    console.log(this.metodo);
    }else{
    this.estado = 2;
    this.metodo = item.id_metodo!
      console.log(this.metodo);
    }
    console.log(this.id)
    const data = {
      id_user: this.store.user.id_user,
      id_pedido: this.id.id_pedido,
      valor: this.id.valor,
      id_metodo: this.metodo,
      estado_valor: this.estado,
      estado_factura: 3,
      user_update: this.store.user.id_user,
    }
    this.service.setFacturaApi( data.id_user! , data);
    //Actualizamos el pedido
    const pedido ={
      estado_valor: this.estado,
      metodo_pago: this.metodo,
      pedido_estado: 3,
      user_update: this.store.user.id_user
    }
    this.service.updatePedido(this.id.id_pedido,pedido);
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
