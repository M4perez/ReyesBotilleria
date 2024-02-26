import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES

import { ListProductsComponent } from './Components/list-products/list-products.component';
import { AddEditProductComponent } from './Components/add-edit-product/add-edit-product.component';

// RUTAS DE LOS MODULOS
const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'add-edit', component: AddEditProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

