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
  
  
  constructor(public service: CajaService,
              private store: StoreService) { }

  ngOnInit(): void {
  }
   
  showModal(){
    this.isVisible = true;
  }

  setFactura(item?: MetodoPago){
    console.log(item);
    this.isVisible = false;
    console.log(this.id)
    const data = {
      id_user: this.store.user.id_user,
      id_pedido: this.id.id_pedido,
      valor: this.id.valor,
      user_update: this.store.user.id_user,
    }
    this.service.setFacturaApi( data.id_user! , data);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
