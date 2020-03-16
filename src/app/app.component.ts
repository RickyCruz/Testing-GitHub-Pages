import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public pageService: PageInfoService,
    public productsService: ProductsService
  ) {}

}
