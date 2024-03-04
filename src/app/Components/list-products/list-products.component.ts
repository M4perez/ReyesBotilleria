import { Component } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
//ITERACION DE ITEMS SE CREA ARRAY LIST PRODUCTS
export class ListProductsComponent {
  listProducts: Product[] = [
    { id: 1, name: 'CocaCola', description: 'Bebida Azucarada', price: 2000, stock: 100 },
    { id: 2, name: 'Corona', description: 'Bebida alcoholica', price: 1500, stock: 200 },
    { id: 3, name: 'Cigarros Kent', description: 'Tabaco mezclado con veneno de rata', price: 5000, stock: 200 },
  ]
}
