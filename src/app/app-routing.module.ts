import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from 'src/app/page/page-index/page-index.component';
import { DocumentosComponent } from './page/documentos/documentos.component';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { RegistreseComponent } from './page/registrese/registrese.component';



//Rutas de  navegación
const routes: Routes = [
  {  path: '',   component: PageIndexComponent },
  {  path: 'home-portal-empleado', component: HomePortalEmpleadoComponent },
  {  path: 'documentos', component: DocumentosComponent },
  {  path: 'registro', component: RegistreseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
