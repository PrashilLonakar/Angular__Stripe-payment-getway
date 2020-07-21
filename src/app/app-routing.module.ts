import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomStripeIntegrationComponent} from './custom-stripe-integration/custom-stripe-integration.component'
import { AppComponent } from './app.component';
import { DefaultStripeIntegrationComponent } from './Default-stripe-integration/Default-stripe-integration.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'default',
        component: DefaultStripeIntegrationComponent,
        // redirectTo: 'auth',
        // pathMatch: 'full',
      },
      {
        path: 'custom',
        component: CustomStripeIntegrationComponent,
        // redirectTo: 'auth',
        // pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
