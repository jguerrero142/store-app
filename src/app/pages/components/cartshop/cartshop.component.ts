import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit {

  constructor(public auth: AuthService,
              public service: PagesService) {}

  ngOnInit(): void {}

  
}
