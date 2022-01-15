import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public ruta: any;
  public rut: boolean = false;

  constructor(public auth: AuthService,
              public service: SharedService) { 
    this.auth.localAuthSetup();
    this.getRuta();
    
  }

  getRuta(){
    this.service.getRuta.subscribe( res =>{
      this.ruta = res.ruta
      console.log(this.ruta);
      if(this.ruta == "/index/menu"){
        this.rut = true
      }
      if(this.ruta == "/reserva/reserva"){
        this.rut = false
      }
    })
  }
}
