import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { nzDesingModule } from '../nzdesing.module';
import { MaterialModule } from '../material.module';
import { TableReservaComponent } from './components/table-reserva/table-reserva.component';
import { TableFacturaComponent } from './components/table-factura/table-factura.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TableReservaComponent,
    TableFacturaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    nzDesingModule,
    MaterialModule,
  ]
})
export class ReservaModule { }
