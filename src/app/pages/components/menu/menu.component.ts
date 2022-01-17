import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/core/store.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CajaService } from '../../../caja/services/caja.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public ruta: string;
  public suscription: Subscription[] = [];
  constructor(private router: Router,
              private store: StoreService,
              private service$: CajaService,
              private service: SharedService) { 
    this.ruta = this.router.url
    this.service.setRuta = this.ruta;
    this.suscription.push(
      this.service$.getAllUser().subscribe(d=>{
      this.service$.setUsers = d;
      })
    );
    this.suscription.push(
      this.service$.getAllMetodo().subscribe(d=>{
        this.service$.setMetodo = d;
      }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.suscription.forEach(d=> d.unsubscribe())
  }

}
