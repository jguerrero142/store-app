import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PagesService } from '../../services/pages.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models';
import { CajaService } from 'src/app/caja/services/caja.service';
import { MetodoPago, User } from 'src/app/caja/models';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/core/store.service';

@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit, OnDestroy {

  public productos: Producto[] = [];
  private serviceD: boolean = false;
  public subcription: Subscription[] = [];
  
  public users!:any;
  public metodos!: any;
  public serviceMode: any;
  public client$!: number;
  public metodo$: number = 1;
  
  isVisible = false;
  isConfirmLoading = false;
  loading = false;
  isLoadingTwo = false;
  selectedValue!:User;
  selectedValue2!: MetodoPago;
  Mdisable = false;
 
  constructor(public auth: AuthService,
              public store: StoreService,
              public service$: CajaService,
              public service: PagesService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getData();
    this.getProducts();
  }

  log(data: User): void {
    this.Mdisable = !this.Mdisable;
    if(data == null){
      this.client$ = 0
      console.log(this.client$);
    }else{
      this.client$ = data.id_user! 
      console.log(this.client$);
    }
    
  }

  logg(data: MetodoPago): void {
    if(data == null){
      this.metodo$ = 1
      console.log(this.metodo$);
    }else{
      this.metodo$ = data.id_metodo!
      console.log(this.metodo$);
    }
  }

  setFactura(){
    console.log(this.metodo$);
    if(this.client$ == null || this.client$ == 0){
      this.isConfirmLoading = true;
      this.service.sendfacturaApi(this.serviceD,this.metodo$ );
      this.metodo$ = 1;
      setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
     }, 200);
    }else{
      this.isConfirmLoading = true;
      this.service.sendfacturaApi2(this.serviceD, this.client$ );
      this.metodo$ = 1;
      setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
     }, 200);
    }
    
    // this.isConfirmLoading = true;
    // this.service.sendfacturaApi(this.serviceD, );
    // setTimeout(() => {
    //   this.isVisible = false;
    //   this.isConfirmLoading = false;
    // }, 200);
  }



  getData(){
    this.subcription.push(
      this.service$.getUsers.subscribe(res=>{
        if(res.length > 0){
          this.users = res;
        }
      })
    );
    this.subcription.push(
      this.service$.getMetodos.subscribe(res=>{
        if(res.length > 0){
          this.metodos = res.filter(d=> d.id_metodo != 1);
        }
      })
    )
    
  }
 

  //Visualiza la modal
  showModal(): void {
  if(this.productos.length == 0){
  this.toastr.warning('Selecciona un producto', 'Hola');
  }else{
    this.isVisible = true;
    this.metodo$ = 1;
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

   ngOnDestroy(): void {
       this.subcription.forEach(d => d.unsubscribe())
   }
}
