import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { MaterialModule } from '../material.module';
import { nzDesingModule } from '../nzdesing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    nzDesingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    CallbackComponent
  ]
})
export class SharedModule { }
