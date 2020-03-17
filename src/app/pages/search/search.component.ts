import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['keyword']);
      this.productsService.searchProduct(params['keyword']);
    });
  }

}
