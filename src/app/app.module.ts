import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from './page/page-index/page-index.component';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { RegistreseComponent } from './page/registrese/registrese.component';

@NgModule({
  declarations: [
    AppComponent,    
    PageIndexComponent, 
    HomePortalEmpleadoComponent, 
    RegistreseComponent,
    ConocenosComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
