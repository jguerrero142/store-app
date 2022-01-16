import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { nzDesingModule } from '../nzdesing.module';
import { MaterialModule } from '../material.module';
import { TableReservaComponent } from './components/table-reserva/table-reserva.component';
import { TableFacturaComponent } from './components/table-factura/table-factura.component';
import { ShowmetodoComponent } from './components/showmetodo/showmetodo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TableReservaComponent,
    TableFacturaComponent,
    ShowmetodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CajaRoutingModule,
    nzDesingModule,
    MaterialModule,
  ]
})
export class CajaModule { }
