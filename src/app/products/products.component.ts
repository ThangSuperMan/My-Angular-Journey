import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'products-app',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponet {
  products = products;

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
