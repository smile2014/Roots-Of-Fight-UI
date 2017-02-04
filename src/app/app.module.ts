import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { TeesComponent } from './tees/tees.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from "./signup/signup.component";
import { LogoutComponent } from "./logout/logout.component";
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TeesComponent,
        HomeComponent,
        SignupComponent,
        LogoutComponent,
        OrdersComponent,
        WishlistComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CarouselModule,
        ReactiveFormsModule,
        Routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}