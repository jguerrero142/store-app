import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  public menu: Producto[] = [];
  public valid: boolean = false;
  constructor(private service: PagesService ) {
    this.getMenu();
   }

  ngOnInit(): void {
  }

  getMenu(){
    this.service.getAllProducts()
    .subscribe( resp =>{
      this.menu = resp.filter( d => d.menu == true);
      this.valid = true;
    })
  }

}
