import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStripeIntegrationComponent } from './custom-stripe-integration/custom-stripe-integration.component';
import { DefaultStripeIntegrationComponent } from './Default-stripe-integration/Default-stripe-integration.component';

@NgModule({
   declarations: [
      AppComponent,
      CustomStripeIntegrationComponent,
      DefaultStripeIntegrationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
