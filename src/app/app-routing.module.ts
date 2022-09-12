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


//Rutas de  navegación
const routes: Routes = [
  {  path: '',   component: IndexComponent },
  {  path: 'home-portal-empleado', component: HomePortalEmpleadoComponent },
  {  path: 'documentos-portal-empleado', component: DocumentosPortalEmpleadoComponent },
  {  path: 'registro', component: RegistreseComponent },
  {  path: 'soy-login-trabajador-home', component: SoyLoginTrabajadorHomeComponent },
  {  path: 'contacto', component: ContactoComponent },
  {  path: 'conocenos', component: ConocenosComponent},
  {  path: 'soy-login-empresa-home', component: SoyEmpresaInteresadaHomeComponent },
  {  path: 'interesada', component: SoyEmpresaInteresadaInfoComponent },
  {  path: 'cortizador', component: CotizadorComponent },
  {  path: 'documentos-desprend', component: DocumentosDesprendComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
