import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { TopbarComponent } from './top-bar/top-bar.component';
import { ProductsComponet } from './products/products.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRountingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CountComponent,
    ProductsComponet,
    ProductAlertComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRountingModule],
  // exports: [],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
