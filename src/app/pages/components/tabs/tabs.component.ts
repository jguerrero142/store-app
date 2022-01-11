import { Component, Input } from '@angular/core';
import { Tipo } from '../../models';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  
  public tipos: Tipo[] = [];
  public valid: boolean = false;

  constructor(private service: PagesService) { 
    this.getTipos();
  }

  getTipos(){
    this.service.getTipoProducts()
    .subscribe( resp => {
      this.tipos = resp;
      this.valid = true;
    })
  }

}
