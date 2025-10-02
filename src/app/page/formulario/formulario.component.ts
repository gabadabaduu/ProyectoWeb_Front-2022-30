import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';
import { UsuarioServicesService } from '../../services/usuario-services.service';

interface SectionDef {
  key: string;
  label: string;
  icon?: string;
  requiredControls: string[];
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements AfterViewInit {

  formHojaDeVida: FormGroup;
  usuarioForm: FormGroup;

  // --- CATÁLOGOS/SUPPORT ARRAYS ---
  estadosCiviles = [
    { codigo:'SO', descripcion:'Soltero(a)' },
    { codigo:'UL', descripcion:'Unión Libre' },
    { codigo:'CA', descripcion:'Casado(a)' },
    { codigo:'SE', descripcion:'Separado(a)' },
    { codigo:'VI', descripcion:'Viudo(a)' },
  ];
  nacionalidades = ['Colombiana','Venezolana','Peruana','Ecuatoriana','Argentina','Mexicana','Otra'];
  departamentos = ['Amazonas','Antioquia','Arauca','Atlántico','Bogotá','Cundinamarca','Meta','Valle del Cauca'];
  tiposSangre = ['O+','O-','A+','A-','B+','B-','AB+','AB-'];
  generos = ['M','F','Otro'];
  manos = [{ valor:'Izquierda', desc:'Zurdo' }, { valor:'Derecha', desc:'Diestro' }];
  nivelesEscolaridad = ['Primaria','Secundaria','Bachiller','Técnico','Tecnólogo','Profesional','Otro'];
  tallas = ['XS','S','M','L','XL','XXL'];
  tallasCalzado = ['35','36','37','38','39','40','41','42','43','44'];
  parentescos = ['Padre','Madre','Hijo','Hija','Hermano','Hermana','Esposo','Esposa','Otro'];
  ocupaciones = ['Empleado','Independiente','Hogar','Desempleado','Otro'];
  opcionSiNo = ['Si','No'];
  hijosPosibles = [0,1,2,3,4,5,6];
  cursosHijos = ['En casa','Preescolar','1','2','3','4','5','6','7','8','9','10','11','Técnico','Universidad'];
  actividadesHijos = ['En casa','Estudia','Trabaja'];
  motivosRetiro = ['Renuncia','Despido','Fin contrato','Reducción','Otro'];
  experienciaAreas = ['Operativo','Administrativo','Comercial','Producción','Campo','Sin experiencia'];
  tiemposTrabajo = ['< 6 meses','6-12 meses','1-2 años','> 2 años'];
  duracionZona = ['< 1 año','1-3 años','3-5 años','> 5 años'];
  tiposVivienda = ['Casa','Apartamento','Finca','Habitación','Otro'];
  quienCuida = ['Yo','Pareja','Abuelos','Familiar','Niñera','Guardería','Colegio','Independientes'];
  respuestasConQuienVive = ['Solo(a)','Pareja','Padres','Hijos','Amigos','Otros'];
  respuestasPersonasACargo = ['Hijos','Padres','Pareja','Otros'];
  calificaciones = ['Excelente','Buena','Regular','Baja'];

  // --- RESTO DE TU CLASE ---
  sectionMeta: SectionDef[] = [
    { key: 'datosPersonales',     label: 'Datos personales',        icon: '🧑', requiredControls: ['numeroCedula','primerApellido','primerNombre','email','direccion'] },
    { key: 'datosCedula',         label: 'Datos cédula',            icon: '🪪', requiredControls: ['fechaNacimiento','fechaExpedicion','rh','genero'] },
    { key: 'datosEscolares',      label: 'Datos escolares',         icon: '🎓', requiredControls: ['nivelEscolaridad','nombreInstitucion'] },
    { key: 'datosTallas',         label: 'Tallas',                  icon: '👕', requiredControls: [] },
    { key: 'datosFamiliares',     label: 'Contacto emergencia',     icon: '📞', requiredControls: ['nombreFamiliar','parentescoFamiliar','telefonoFamiliar'] },
    { key: 'datosPareja',         label: 'Pareja',                  icon: '❤️', requiredControls: [] },
    { key: 'datosHijos',          label: 'Hijos',                   icon: '👶', requiredControls: [] },
    { key: 'datosPadre',          label: 'Padre',                   icon: '👨', requiredControls: [] },
    { key: 'datosMadre',          label: 'Madre',                   icon: '👩', requiredControls: [] },
    { key: 'datosReferencia',     label: 'Referencia',              icon: '🔗', requiredControls: ['nombreReferencia','telefonoReferencia'] },
    { key: 'experienciaLaboral',  label: 'Experiencia laboral',     icon: '💼', requiredControls: [] },
    { key: 'entrevistaVirtual',   label: 'Entrevista virtual',      icon: '💻', requiredControls: [] },
    { key: 'familia',             label: 'Familia',                 icon: '🏠', requiredControls: [] },
    { key: 'publicidad',          label: 'Publicidad',              icon: '📣', requiredControls: ['medioPublicidadSelect'] },
  ];
  currentIndex = 0;
  progressPercent = 0;
  startDate = new Date(1990, 0, 1);

  previsualizacionFrontal: string | null = null;
  previsualizacionPosterior: string | null = null;

  @ViewChildren('formSection') sectionRefs!: QueryList<ElementRef<HTMLElement>>;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioServicesService
  ) {
    // ... tu código para construir formularios ...
    this.formHojaDeVida = this.fb.group({
      // ... campos igual que antes ...
      numeroCedula: ['', [Validators.required, Validators.minLength(5)]],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      estadoCivil: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      barrio: [''],
      telefonoCelular: [''],
      ciudadResidencia: [''],
      departamentoResidencia: [''],
      departamentoNacimiento: [''],
      nacionalidad: [''],
      fechaNacimiento: ['', Validators.required],
      fechaExpedicion: ['', Validators.required],
      rh: ['', Validators.required],
      genero: ['', Validators.required],
      manoDominante: [''],
      nivelEscolaridad: [''],
      nivelEscolaridadOtro: [''],
      nombreInstitucion: [''],
      anoFinalizacion: [''],
      tituloObtenido: [''],
      tituloObtenidoOtro: [''],
      tallaChaqueta: [''],
      tallaPantalon: [''],
      tallaCamisa: [''],
      tallaCalzado: [''],
      nombreFamiliar: [''],
      parentescoFamiliar: [''],
      telefonoFamiliar: [''],
      direccionFamiliar: [''],
      barrioFamiliar: [''],
      ocupacionFamiliar: [''],
      tienePareja: ['No'],
      nombrePareja: [''],
      ocupacionPareja: [''],
      direccionPareja: [''],
      telefonoPareja: [''],
      barrioPareja: [''],
      numeroHijos: [0],
      hijos: this.fb.array([]),
      padreVivo: ['No'],
      nombrePadre: [''],
      ocupacionPadre: [''],
      direccionPadre: [''],
      telefonoPadre: [''],
      barrioPadre: [''],
      madreViva: ['No'],
      nombreMadre: [''],
      ocupacionMadre: [''],
      direccionMadre: [''],
      telefonoMadre: [''],
      barrioMadre: [''],
      nombreReferencia: [''],
      telefonoReferencia: [''],
      ocupacionReferencia: [''],
      tieneExperiencia: ['No'],
      empresaAnterior: [''],
      direccionEmpresa: [''],
      telefonoEmpresa: [''],
      nombreJefeInmediato: [''],
      cargoEmpresa: [''],
      fechaRetiroEmpresa: [''],
      motivoRetiroEmpresa: [''],
      areaExperiencia: [''],
      tiempoTrabajado: [''],
      empresasFlores: [''],
      areaFloresSelect: [''],
      areaFloresOtro: [''],
      calificacionRendimiento: [''],
      razonCalificacion: [''],
      tiempoZona: [''],
      tipoVivienda: [''],
      estudiaActualmente: ['No'],
      hijosACargo: [''],
      quienLosCuida: [''],
      conQuienVive: this.fb.array(this.respuestasConQuienVive.map(() => this.fb.control(false))),
      personasACargo: this.fb.array(this.respuestasPersonasACargo.map(() => this.fb.control(false))),
      relacionFamiliar: [''],
      motivosFelicitacion: [''],
      conflictosLaborales: ['No'],
      conflictosDetalle: [''],
      proyectoVida: [''],
      experienciaSignificativa: [''],
      medioPublicidadSelect: [''],
      medioPublicidadOtro: [''],
    });

    // Formulario de usuario para registro/login
    this.usuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // Puedes agregar campos como nombre, etc.
    });

    // Sincronizar hijos dinámicos
    this.formHojaDeVida.get('numeroHijos')?.valueChanges
      .subscribe(v => this.syncHijos(v || 0));
    this.syncHijos(0);
  }

  ngAfterViewInit(): void {
    this.updateProgress();
  }

  // --- AGREGA ESTE MÉTODO PARA ARREGLAR LOS ERRORES DE scrollCurrent ---
  private scrollCurrent(): void {
    const el = this.sectionRefs?.toArray()[this.currentIndex]?.nativeElement;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---------- Getters ----------
  get hijosArray(): FormArray {
    return this.formHojaDeVida.get('hijos') as FormArray;
  }

  private buildHijoGroup(): FormGroup {
    return this.fb.group({
      nombre: [''],
      sexo: [''],
      fechaNacimiento: [''],
      documento: [''],
      curso: [''],
      actividad: ['']
    });
  }

  private syncHijos(cantidad: number): void {
    const arr = this.hijosArray;
    const actual = arr.length;
    if (cantidad > actual) {
      for (let i = actual; i < cantidad; i++) {
        arr.push(this.buildHijoGroup());
      }
    } else if (cantidad < actual) {
      for (let i = actual - 1; i >= cantidad; i--) {
        arr.removeAt(i);
      }
    }
  }

  goNext(): void {
    if (this.currentIndex < this.sectionMeta.length - 1) {
      this.currentIndex++;
      this.scrollCurrent();
      this.updateProgress();
    }
  }

  goPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollCurrent();
      this.updateProgress();
    }
  }

  goTo(i: number): void {
    if (this.isSectionEnabled(i)) {
      this.currentIndex = i;
      this.scrollCurrent();
      this.updateProgress();
    }
  }

  isSectionEnabled(i: number): boolean {
    if (i < this.currentIndex) return true;
    if (i === this.currentIndex) return true;
    if (i === this.currentIndex + 1 && this.isSectionValid(this.currentIndex)) return true;
    return false;
  }

  isSectionValid(index: number): boolean {
    const meta = this.sectionMeta[index];
    if (!meta || meta.requiredControls.length === 0) return true;
    return meta.requiredControls.every(c => this.formHojaDeVida.get(c)?.valid);
  }

  isWholeFormValid(): boolean {
    return this.formHojaDeVida.valid;
  }

  private updateProgress(): void {
    if (this.sectionMeta.length > 1) {
      this.progressPercent = (this.currentIndex) / (this.sectionMeta.length - 1) * 100;
    } else {
      this.progressPercent = 0;
    }
  }

  // ---------- Archivos ----------
  onFileFrontal(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.fileToBase64(file).then(b => this.previsualizacionFrontal = b);
  }

  onFilePosterior(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.fileToBase64(file).then(b => this.previsualizacionPosterior = b);
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });
  }

  limpiarImagenes(): void {
    this.previsualizacionFrontal = null;
    this.previsualizacionPosterior = null;
  }

  // ---------- Registro de Usuario ----------
  registrarUsuario(): void {
    this.usuarioService.registrarUsuario(this.usuarioForm.value)
      .subscribe({
        next: (resp: any) => {
          alert('Usuario registrado correctamente');
          this.usuarioService.setUsuarioLogueado(resp.usuario);
        },
        error: (err: any) => { alert('Error al registrar usuario'); }
      });
  }

  // ---------- Login de Usuario ----------
  loginUsuario(): void {
    this.usuarioService.loginUsuario(this.usuarioForm.value)
      .subscribe({
        next: (resp: any) => {
          alert('Login correcto');
          if (resp.token) {
            localStorage.setItem('token', resp.token);
          }
          this.usuarioService.setUsuarioLogueado(resp.usuario);
        },
        error: (err: any) => { alert('Error al hacer login'); }
      });
  }

  // ---------- Logout ----------
  logoutUsuario(): void {
    this.usuarioService.logoutUsuario();
    alert('Sesión cerrada');
  }

  // ---------- Submit ----------
  onSubmit(): void {
    if (!this.formHojaDeVida.valid) {
      this.formHojaDeVida.markAllAsTouched();
      const idx = this.sectionMeta.findIndex(s =>
        s.requiredControls.some(ctrl => this.formHojaDeVida.get(ctrl)?.invalid)
      );
      if (idx >= 0) {
        this.currentIndex = idx;
        this.scrollCurrent();
        this.updateProgress();
      }
      return;
    }
    const usuario = this.usuarioService.getUsuarioLogueado();
    const dataEnviar = { ...this.formHojaDeVida.value, usuarioId: usuario?.id || null };

    this.usuarioService.enviarFormularioContratacion(dataEnviar)
      .subscribe({
        next: (resp: any) => {
          alert('Formulario enviado con éxito');
        },
        error: (err: any) => {
          alert('Error al enviar el formulario');
        }
      });
  }

  ver(): void {
    console.log('Valores:', this.formHojaDeVida.value);
    console.log('Validez:', this.formHojaDeVida.valid);
  }
}
