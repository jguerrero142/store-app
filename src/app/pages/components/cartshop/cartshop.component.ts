import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PagesService } from '../../services/pages.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit {

  public productos: Producto[] = [];
  private serviceD: boolean = false;
  isVisible = false;
  isConfirmLoading = false;
  loading = false;
  
  public serviceMode: any;
  constructor(public auth: AuthService,
              public service: PagesService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  //Visualiza la modal
  showModal(): void {
  if(this.productos.length == 0){
  this.toastr.warning('Selecciona un producto', 'Hola');
  }else{
    this.isVisible = true;
  }}

  //Obtiene todos los productos seleccionados
  getProducts(){
    this.service.getPedido.subscribe(data=>{
    this.productos = data.productos;
    })
  }
  //Confirma el estado de domicilio
  setService(){
    if(!this.serviceMode){
      this.serviceD = true;
    }else if(this.serviceMode){
      this.serviceD = false;
    }
  }
  //Envia el pedido con los productos
  setPedido(): void {
    this.isConfirmLoading = true;
    this.service.sendPedidoApi(this.serviceD);
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 200);
  }

  //Elimina los productos seleccionados
  deleteItem(item: number){
    this.service.deletItem = item;
    if(this.productos.length == 0){
    this.isVisible = false;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

   
}
