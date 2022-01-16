import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CartshopComponent } from './components/cartshop/cartshop.component';
import { nzDesingModule } from '../nzdesing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    CarrouselComponent,
    TabsComponent,
    CartshopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    nzDesingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PagesModule { }
