import { products, ProductProps } from '../products';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: ProductProps | undefined;

  constructor(private route: ActivatedRoute) {
    console.log('products :>> ', products);
    console.log('constructor just executed!');
    console.log('ActivatedRoute :>> ', ActivatedRoute);
  }

  ngOnInit() {
    console.log('ngon init just executed!');
    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const productIdFromRoute: number = Number(routeParams.get('product_id'));

    this.product = products.find(
      (product: ProductProps) => product.id === productIdFromRoute
    );
    // console.log('proudct after find :>> ', product);
  }
}
