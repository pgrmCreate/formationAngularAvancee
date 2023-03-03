import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductDetailAvisComponent} from './product-detail-avis/product-detail-avis.component';
import {ProductDetailTechComponent} from './product-detail-tech/product-detail-tech.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductDetailComponent,
        NavbarComponent,
        ProductDetailAvisComponent,
        ProductDetailTechComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
