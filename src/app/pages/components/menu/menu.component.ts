import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public ruta: string;
  constructor(private router: Router,
              private service: SharedService) { 
    this.ruta = this.router.url
    this.service.setRuta = this.ruta;
  }

  ngOnInit(): void {
  }

}
