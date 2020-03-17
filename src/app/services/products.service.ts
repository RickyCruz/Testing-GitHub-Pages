import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public loading = true;
  public products: Product[] = [];
  public filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  private fetchProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://project-4564689245877046784.firebaseio.com/products_idx.json')
        .subscribe((response: Product[]) => {
          this.loading = false;
          this.products = response;
          resolve();
        });
    });
  }

  public getProduct(id: string) {
    return this.http.get(`https://project-4564689245877046784.firebaseio.com/products/${id}.json`);
  }

  public searchProduct(keyword: string) {
    // Load products
    if (this.products.length === 0) {
      this.fetchProducts().then(() => { // Execute after fetch products
        // Apply filter
        this.filter(keyword);
      });
    } else { // Apply filter
      this.filter(keyword);
    }
  }

  private filter(keyword: string) {
    this.filteredProducts = [];

    keyword = keyword.toLocaleLowerCase();

    this.products.forEach(product => {
      const lowerTitle = product.title.toLocaleLowerCase();

      if (product.category.indexOf(keyword) >= 0 || lowerTitle.indexOf(keyword) >= 0) {
        this.filteredProducts.push(product)
        console.log(this.filteredProducts)
      }
    });
  }
}
