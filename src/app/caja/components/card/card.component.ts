import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/pages/models';
import { PagesService } from '../../../pages/services/pages.service';
import { ApiItems } from '../../interface/api-items';
import { CajaService } from '../../services/caja.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() tipoPro: number = 0;

  public productos: Producto[] = [];
  public items: ApiItems[] = [];
  isVisible = false;
  constructor( private service: PagesService,
              private service$: CajaService) {
    this.getProductos();
   }

  ngOnInit(): void {
  }

  getProductos(){
    this.service.getAllProducts().subscribe( data => {
      this.productos = data.filter(d => d.producto_tipo == this.tipoPro);
    })
  }

  showModal(id: number): void {
    console.log(id);
    this.service$.getInventario().subscribe(d=>{
      this.items = d.filter( d=> d.id_producto == id );
      console.log(this.items)
    })
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
