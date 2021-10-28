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
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/television/tv.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';

//whenever we make routes we need make a constant
const appRoutes:Routes=[
  {path:'' , redirectTo:'login' , pathMatch:'full'}, //this will make the page redirect to login by default

  {path:'login' , component : LoginComponent},
  {path:'home' , component : HomeComponent},
  {path:'about' , component : AboutComponent},
  {path:'contact' , component : ContactComponent},
  //below we are doing child routing of products
  {path:'products'  , children:[
    {path:'',component : ProductsComponent},
    {path:'laptop' , component : LaptopComponent},
    {path:'mobile' , component : MobileComponent},
    {path:'television' , component : TvComponent},
    {path:'washing-machine' , component : WashingMachineComponent}
  ]},
  {path:'**' , component : PageNotFoundComponent}
  // "**" : when no other route matched the website will redirect to '**'
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
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    TvComponent,
    MobileComponent,
    WashingMachineComponent
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
