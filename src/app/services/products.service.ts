import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private loading = true;
  private products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.http.get('https://project-4564689245877046784.firebaseio.com/products_idx.json')
      .subscribe((response: Product[]) => {
        this.loading = false;
        this.products = response;
      });
  }
}
