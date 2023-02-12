import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { RegistreseComponent } from './page/registrese/registrese.component';
import { SoyLoginTrabajadorHomeComponent } from './page/soy-login-trabajador-home/soy-login-trabajador-home.component';
import { IndexComponent } from './page/index/index.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { SoyEmpresaInteresadaHomeComponent } from './page/soy-empresa-interesada-home/soy-empresa-interesada-home.component';
import { SoyEmpresaInteresadaInfoComponent } from './page/soy-empresa-interesada-info/soy-empresa-interesada-info.component';
import { CotizadorComponent } from './page/cotizador/cotizador.component';
import { DocumentosPortalEmpleadoComponent } from './page/documentos-portal-empleado/documentos-portal-empleado.component';
import { DocumentosDesprendComponent } from './page/documentos-desprend/documentos-desprend.component';
import { DocumentosLiquidComponent } from './page/documentos-liquid/documentos-liquid.component';
import { DocumentosCertificacionesComponent } from './page/documentos-certificaciones/documentos-certificaciones.component';
import { FormacionPortalEmpleadoComponent } from './page/formacion-portal-empleado/formacion-portal-empleado.component';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';
import { Paso1Component } from './page/paso1/paso1.component';
import { Paso2Component } from './page/paso2/paso2.component';
import { Paso3Component } from './page/paso3/paso3.component';
import { Paso4Component } from './page/paso4/paso4.component';
import { Paso5Component } from './page/paso5/paso5.component';
import { Paso6Component } from './page/paso6/paso6.component';
import { FormularioComponent } from './page/formulario/formulario.component';


//Rutas de  navegación
const routes: Routes = [
  
  {  path: '',   component: IndexComponent },
  {  path: 'home-portal-empleado', component: HomePortalEmpleadoComponent ,  pathMatch : 'full'},
  {  path: 'documentos-portal-empleado', component: DocumentosPortalEmpleadoComponent ,  pathMatch : 'full'},
  {  path: 'registro', component: RegistreseComponent ,  pathMatch : 'full'},
  {  path: 'soy-login-trabajador-home', component: SoyLoginTrabajadorHomeComponent ,  pathMatch : 'full'},
  {  path: 'contacto', component: ContactoComponent ,  pathMatch : 'full'},
  {  path: 'conocenos', component: ConocenosComponent,  pathMatch : 'full'},
  {  path: 'soy-login-empresa-home', component: SoyEmpresaInteresadaHomeComponent ,  pathMatch : 'full'},
  {  path: 'interesada', component: SoyEmpresaInteresadaInfoComponent ,  pathMatch : 'full'},
  {  path: 'cortizador', component: CotizadorComponent ,  pathMatch : 'full'},
  {  path: 'documentos-desprend', component: DocumentosDesprendComponent ,  pathMatch : 'full'},
  {  path: 'documentos-liquid', component: DocumentosLiquidComponent ,  pathMatch : 'full'},
  {  path: 'documentos-certificado', component: DocumentosCertificacionesComponent ,  pathMatch : 'full'},
  {  path: 'formacion', component: FormacionPortalEmpleadoComponent ,  pathMatch : 'full'},
  {  path: 'datospersonales', component: DatosPersonalesComponent ,  pathMatch : 'full'},
  {  path: 'paso1', component: Paso1Component ,  pathMatch : 'full'},
  {  path: 'paso2', component: Paso2Component ,  pathMatch : 'full'},
  {  path: 'paso3', component: Paso3Component ,  pathMatch : 'full'},
  {  path: 'paso4', component: Paso4Component ,  pathMatch : 'full'},
  {  path: 'paso5', component: Paso5Component ,  pathMatch : 'full'},
  {  path: 'paso6', component: Paso6Component ,  pathMatch : 'full'},
  {  path: 'formulario', component: FormularioComponent ,  pathMatch : 'full'  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
