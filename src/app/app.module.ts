import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';


import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { RegistreseComponent } from './page/registrese/registrese.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './page/footer/footer.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { SoyLoginTrabajadorHomeComponent } from './page/soy-login-trabajador-home/soy-login-trabajador-home.component';
import { IndexComponent } from './page/index/index.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { SoyEmpresaInteresadaHomeComponent } from './page/soy-empresa-interesada-home/soy-empresa-interesada-home.component';
import { SoyEmpresaInteresadaInfoComponent } from './page/soy-empresa-interesada-info/soy-empresa-interesada-info.component';
import { CotizadorComponent } from './page/cotizador/cotizador.component';
import { NavbarVerticalComponent } from './page/navbar-vertical/navbar-vertical.component';
import { DocumentosPortalEmpleadoComponent } from './page/documentos-portal-empleado/documentos-portal-empleado.component';
import { DocumentosDesprendComponent } from './page/documentos-desprend/documentos-desprend.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DocumentosLiquidComponent } from './page/documentos-liquid/documentos-liquid.component';
import { DocumentosCertificacionesComponent } from './page/documentos-certificaciones/documentos-certificaciones.component';
import { FormacionPortalEmpleadoComponent } from './page/formacion-portal-empleado/formacion-portal-empleado.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';
import { Paso1Component } from './page/paso1/paso1.component';
import { Paso2Component } from './page/paso2/paso2.component';
import { Paso3Component } from './page/paso3/paso3.component';
import { Paso4Component } from './page/paso4/paso4.component';
import { Paso5Component } from './page/paso5/paso5.component';
import { Paso6Component } from './page/paso6/paso6.component';
import { FormularioComponent } from './page/formulario/formulario.component';
import { Login } from './login/login';

@NgModule({
  declarations: [
    AppComponent,
    HomePortalEmpleadoComponent,
    RegistreseComponent,
    FooterComponent,
    NavbarComponent,
    SoyLoginTrabajadorHomeComponent,
    IndexComponent,
    ContactoComponent,
    ConocenosComponent,
    SoyEmpresaInteresadaHomeComponent,
    SoyEmpresaInteresadaInfoComponent,
    CotizadorComponent,
    NavbarVerticalComponent,
    DocumentosPortalEmpleadoComponent,
    DocumentosDesprendComponent,
    ProfileComponent,
    DocumentosLiquidComponent,
    DocumentosCertificacionesComponent,
    FormacionPortalEmpleadoComponent,
    PerfilComponent,
    DatosPersonalesComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    Paso5Component,
    Paso6Component,
    FormularioComponent,
    Login,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatFormFieldModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
