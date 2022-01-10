import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { nzDesingModule } from './nzdesing.module';
import { MaterialModule } from './material.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    nzDesingModule,
    SharedModule,
    MaterialModule,
    ToastrModule.forRoot(), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
