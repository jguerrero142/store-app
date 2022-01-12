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
  isVisible = false;
  isConfirmLoading = false;
  switchValue = false;
  loading = false;
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

  //Elimina los productos seleccionados
  deleteItem(item: number){
    this.service.deletItem = item;
    if(this.productos.length == 0){
    this.isVisible = false;
    }
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
  
}
