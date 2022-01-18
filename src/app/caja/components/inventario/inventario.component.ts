import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/pages/models';
import { PagesService } from 'src/app/pages/services/pages.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  public tipos: Tipo[] = [];
  public valid: boolean = false;
  constructor(private service: PagesService) {
    this.getTipos();
   }

  ngOnInit(): void {
  }

  getTipos(){
    this.service.getTipoProducts()
    .subscribe( resp => {
      this.tipos = resp.filter(d=> d.id_tipo > 2);
      this.valid = true;
    })
  }

}
