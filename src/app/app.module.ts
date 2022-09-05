import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from './page/page-index/page-index.component';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { ContactenosComponent } from './page/contactenos/contactenos.component';
import { RegistreseComponent } from './page/registrese/registrese.component';
import { DocumentosComponent } from './page/documentos/documentos.component';

@NgModule({
  declarations: [
    AppComponent,    
    PageIndexComponent, 
    HomePortalEmpleadoComponent, 
    RegistreseComponent,
    ConocenosComponent, 
    ContactenosComponent,  
    DocumentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
