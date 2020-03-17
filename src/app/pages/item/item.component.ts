import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  public product: ProductDescription;
  public productId: string;

  constructor(
    private route: ActivatedRoute,
    public productsservice: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.productsservice.getProduct(parameters['id'])
        .subscribe((product: ProductDescription) => {
          this.productId = parameters['id'];
          this.product = product;
        });
    });
  }

}
