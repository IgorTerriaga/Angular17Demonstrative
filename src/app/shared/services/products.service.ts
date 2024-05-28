import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, ProductPayload } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  createProduct(payload : ProductPayload){
    return this.httpClient.post('http://localhost:3000/products', payload)
  }
}
