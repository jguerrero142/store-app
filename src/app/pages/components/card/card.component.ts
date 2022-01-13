import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() tipoPro: number = 0;

  public productos: Producto[] = [];
  public items: Producto[] = [];
  constructor( private service: PagesService) {
    this.getProductos();
   }

  ngOnInit(): void {
  }

  getProductos(){
    this.service.getAllProducts().subscribe( data => {
      this.productos = data.filter(d => d.producto_tipo == this.tipoPro);
    })
  }

  setTicket(producto: Producto){
    this.service.setItem = producto;
  }

}
