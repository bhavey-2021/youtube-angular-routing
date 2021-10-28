import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

//whenever we make routes we need make a constant
const appRoutes:Routes=[
  {path:'' , component : HomeComponent}, //this will make the home component defaulty open
  {path:'about' , component : AboutComponent},
  {path:'contact' , component : ContactComponent},
  {path:'products' , component : ProductsComponent}
]//each route will be as a java script object

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)   ,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
