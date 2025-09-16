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

interface SectionDef {
  key: string;
  label: string;
  requiredControls: string[];
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements AfterViewInit {

  formHojaDeVida: FormGroup;

  // Meta de secciones (ajusta etiquetas según necesidad)
  sectionMeta: SectionDef[] = [
    { key: 'datosPersonales',     label: 'Datos personales',        requiredControls: ['numeroCedula','primerApellido','primerNombre','email','direccion'] },
    { key: 'datosCedula',         label: 'Datos cédula',            requiredControls: ['fechaNacimiento','fechaExpedicion','rh','genero'] },
    { key: 'datosEscolares',      label: 'Datos escolares',         requiredControls: ['nivelEscolaridad','nombreInstitucion'] },
    { key: 'datosTallas',         label: 'Tallas',                  requiredControls: [] },
    { key: 'datosFamiliares',     label: 'Contacto emergencia',     requiredControls: ['nombreFamiliar','parentescoFamiliar','telefonoFamiliar'] },
    { key: 'datosPareja',         label: 'Pareja',                  requiredControls: [] },
    { key: 'datosHijos',          label: 'Hijos',                   requiredControls: [] },
    { key: 'datosPadre',          label: 'Padre',                   requiredControls: [] },
    { key: 'datosMadre',          label: 'Madre',                   requiredControls: [] },
    { key: 'datosReferencia',     label: 'Referencia',              requiredControls: ['nombreReferencia','telefonoReferencia'] },
    { key: 'experienciaLaboral',  label: 'Experiencia laboral',     requiredControls: [] },
    { key: 'entrevistaVirtual',   label: 'Entrevista virtual',      requiredControls: [] },
    { key: 'familia',             label: 'Familia',                 requiredControls: [] },
    { key: 'publicidad',          label: 'Publicidad',              requiredControls: ['medioPublicidadSelect'] },
  ];

  currentIndex = 0;
  progressPercent = 0;
  startDate = new Date(1990, 0, 1);

  // Catálogos
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

  // Previews archivos
  previsualizacionFrontal: string | null = null;
  previsualizacionPosterior: string | null = null;

  @ViewChildren('formSection') sectionEls!: QueryList<ElementRef<HTMLElement>>;

  constructor(private fb: FormBuilder) {
    this.formHojaDeVida = this.fb.group({

      // Datos personales
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

      // Cédula / identidad
      fechaNacimiento: ['', Validators.required],
      fechaExpedicion: ['', Validators.required],
      rh: ['', Validators.required],
      genero: ['', Validators.required],
      manoDominante: [''],

      // Escolares
      nivelEscolaridad: [''],
      nivelEscolaridadOtro: [''],
      nombreInstitucion: [''],
      anoFinalizacion: [''],
      tituloObtenido: [''],
      tituloObtenidoOtro: [''],

      // Tallas
      tallaChaqueta: [''],
      tallaPantalon: [''],
      tallaCamisa: [''],
      tallaCalzado: [''],

      // Contacto emergencia
      nombreFamiliar: [''],
      parentescoFamiliar: [''],
      telefonoFamiliar: [''],
      direccionFamiliar: [''],
      barrioFamiliar: [''],
      ocupacionFamiliar: [''],

      // Pareja
      tienePareja: ['No'],
      nombrePareja: [''],
      ocupacionPareja: [''],
      direccionPareja: [''],
      telefonoPareja: [''],
      barrioPareja: [''],

      // Hijos
      numeroHijos: [0],
      hijos: this.fb.array([]),

      // Padre
      padreVivo: ['No'],
      nombrePadre: [''],
      ocupacionPadre: [''],
      direccionPadre: [''],
      telefonoPadre: [''],
      barrioPadre: [''],

      // Madre
      madreViva: ['No'],
      nombreMadre: [''],
      ocupacionMadre: [''],
      direccionMadre: [''],
      telefonoMadre: [''],
      barrioMadre: [''],

      // Referencia
      nombreReferencia: [''],
      telefonoReferencia: [''],
      ocupacionReferencia: [''],

      // Experiencia laboral
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

      // Entrevista / entorno
      tiempoZona: [''],
      tipoVivienda: [''],
      estudiaActualmente: ['No'],
      hijosACargo: [''],
      quienLosCuida: [''],
      conQuienVive: this.fb.array(this.respuestasConQuienVive.map(() => this.fb.control(false))),
      personasACargo: this.fb.array(this.respuestasPersonasACargo.map(() => this.fb.control(false))),

      // Familia
      relacionFamiliar: [''],
      motivosFelicitacion: [''],
      conflictosLaborales: ['No'],
      conflictosDetalle: [''],
      proyectoVida: [''],
      experienciaSignificativa: [''],

      // Publicidad
      medioPublicidadSelect: [''],
      medioPublicidadOtro: [''],
    });

    // Sincronizar hijos dinámicos
    this.formHojaDeVida.get('numeroHijos')?.valueChanges
      .subscribe(v => this.syncHijos(v || 0));
    this.syncHijos(0);
  }

  ngAfterViewInit(): void {
    this.updateProgress();
  }

  // ---------- Getters ----------
  get hijosArray(): FormArray {
    return this.formHojaDeVida.get('hijos') as FormArray;
  }

  // ---------- Hijos dinámicos ----------
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

  // ---------- Navegación secciones ----------
  @ViewChildren('formSection') private sectionRefs!: QueryList<ElementRef<HTMLElement>>;

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
    this.currentIndex = i;
    this.scrollCurrent();
    this.updateProgress();
  }

  private scrollCurrent(): void {
    const el = this.sectionRefs?.toArray()[this.currentIndex]?.nativeElement;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // ---------- Submit ----------
  onSubmit(): void {
    if (!this.formHojaDeVida.valid) {
      this.formHojaDeVida.markAllAsTouched();
      // saltar a primera sección inválida si aplica
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
    console.log('Formulario válido. Payload:', this.formHojaDeVida.value);
  }

  // ---------- Utilidad debug ----------
  ver(): void {
    console.log('Valores:', this.formHojaDeVida.value);
    console.log('Validez:', this.formHojaDeVida.valid);
  }
}
