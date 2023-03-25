import { Component, Input } from '@angular/core';
import { ProductProps } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent {
  // @Input() product!: ProductProps;
  // @Input() _product: ProductProps;
  public myAge: number;

  get getMyAge(): number {
    return this.myAge;
  }

  set getMyAge(newAge: number) {
    this.myAge = newAge;
  }

  constructor() {
    this.myAge = 21;
  }
}
