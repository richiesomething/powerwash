import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceAlertsComponent } from './service-alerts/service-alerts.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ServiceListComponent,
    ServiceAlertsComponent,
    ServiceDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ServiceListComponent },
      { path: 'services/:serviceId', component: ServiceDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
