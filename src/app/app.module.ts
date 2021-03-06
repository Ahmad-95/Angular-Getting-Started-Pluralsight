import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
//import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  //providers: [ProductDetailComponent,ProductListComponent, ProductGuardService],
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '*', redirectTo: 'welcome', pathMatch: 'full'}
      ]),
      ProductModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
