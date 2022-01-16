import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { MaterialModule } from '../material.module';
import { nzDesingModule } from '../nzdesing.module';
import { DrawerComponent } from './components/drawer/drawer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CallbackComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    nzDesingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    CallbackComponent,
    DrawerComponent
  ]
})
export class SharedModule { }
