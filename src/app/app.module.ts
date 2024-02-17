import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';

// SE CREA MODULO "NG G C (NOMBRE DEL COMPONENTE)"
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
  ],
  //LO IMPORTA 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
