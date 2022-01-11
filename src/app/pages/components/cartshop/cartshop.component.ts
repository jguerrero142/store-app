import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PagesService } from '../../services/pages.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models';

@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit {

  public productos: Producto[] = [];
  isVisible = false;
  isConfirmLoading = false;
  constructor(public auth: AuthService,
              public service: PagesService,
              private toastr: ToastrService) {}

  ngOnInit(): void {}

  showModal(): void {
    this.service.getPedido.subscribe(data =>{
      if(data.productos.length == 0){
        this.toastr.warning('Selecciona un producto', 'Hola');
      }else{
        this.productos = data.productos;
        this.isVisible = true;
      }
    });
    
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
  
}
