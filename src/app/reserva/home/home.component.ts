import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ruta: string;
  constructor(private router: Router,
              private service: SharedService) {
    this.ruta = this.router.url
    this.service.setRuta = this.ruta;
   }

  ngOnInit(): void {
  }

}
