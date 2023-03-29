import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductProps } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent {
  // @Input() product!: ProductProps;
  @Input() product: ProductProps | undefined;
  @Output() notify = new EventEmitter();
}
