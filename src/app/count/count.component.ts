import { Component } from '@angular/core';

@Component({
  selector: 'count-app',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  count = 0;

  sayHi() {
    console.log('sayHi');
  }
}
