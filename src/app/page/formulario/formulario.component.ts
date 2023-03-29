import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HojaDeVida } from 'src/app/model/hoja-de-vida';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  datosHoja: HojaDeVida = new HojaDeVida();
  escolaridadSeleccionada: string | undefined;
  formHojaDeVida: FormGroup;

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {
    const controles = this.listaPosiblesRespuestasConquienVive.map(() => new FormControl(false));
    const controles2 = this.listaPosiblesRespuestasPersonasACargo.map(() => new FormControl(false));

    this.formHojaDeVida = new FormGroup({
      'aux': new FormControl('', Validators.required),
      'aux2': new FormControl('', Validators.required),
      'aux3': new FormControl('', Validators.required),
      'aux4': new FormControl('', Validators.required),
      'aux5': new FormControl('', Validators.required),
      'aux6': new FormControl('', Validators.required),
      'aux7': new FormControl('', Validators.required),
      'aux8': new FormControl('', Validators.required),
      'aux9': new FormControl('', Validators.required),
      'aux10': new FormControl('', Validators.required),
      'aux11': new FormControl('', Validators.required),
      'aux12': new FormControl('', Validators.required),
      'aux13': new FormControl('', Validators.required),



      // Datos personales
      'numeroCedula': new FormControl('', Validators.required),
      'pApellido': new FormControl('', Validators.required),
      'sApellido': new FormControl(''),
      'pNombre': new FormControl('', Validators.required),
      'sNombre': new FormControl(''),
      'estadoC': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'direccion': new FormControl('', Validators.required),
      'barrio': new FormControl('', Validators.required),
      'telefonoCelular': new FormControl('', Validators.required),
      'Ciudad': new FormControl('', Validators.required),
      'departamentoExpe': new FormControl('', Validators.required),
      'departamentoNaci': new FormControl('', Validators.required),
      'nacionalidad': new FormControl('', Validators.required),

      //Datos cedula
      'FechaNacimiento': new FormControl('', Validators.required),
      'FechaExpedicion': new FormControl('', Validators.required),
      'RH': new FormControl('', Validators.required),
      'genero': new FormControl('', Validators.required),
      'nivelEscolaridad': new FormControl('', Validators.required),
      'nombreInstitucion': new FormControl('', Validators.required),
      'anofinalizacion': new FormControl('', Validators.required),
      'tituloObtenido': new FormControl('', Validators.required),

      //Datos Tallas
      'tallaChaqueta': new FormControl('', Validators.required),
      'tallaPantalon': new FormControl('', Validators.required),
      'tallaCamisa': new FormControl('', Validators.required),
      'tallaCalzado': new FormControl('', Validators.required),

      //Datos Familiares
      'NombreFamiliar': new FormControl('', Validators.required),
      'ParentescoFamiliar': new FormControl('', Validators.required),
      'DireccionFamiliar': new FormControl('', Validators.required),
      'BarrioFamiliar': new FormControl('', Validators.required),
      'TelefonoFamiliar': new FormControl('', Validators.required),
      'OcupacionFamiliar': new FormControl('', Validators.required),

      //Datos Pareja
      'NombrePareja': new FormControl('', Validators.required),
      'DireccionPareja': new FormControl('', Validators.required),
      'BarrioPareja': new FormControl('', Validators.required),
      'TelefonoPareja': new FormControl('', Validators.required),
      'OcupacionPareja': new FormControl('', Validators.required),

      //Datos Hijos mejorar juan pablo por favor
      'NumeroHijos': new FormControl('', Validators.required),
      'GeneroHijo': new FormControl('', Validators.required),
      'Fecha nacimiento': new FormControl('', Validators.required),
      'NumeroDocumento': new FormControl('', Validators.required),
      'Curso': new FormControl('', Validators.required),
      'Ocupacion': new FormControl('', Validators.required),


      // Datos del padre
      'NombrePadre': new FormControl('', Validators.required),
      'OcupacionPadre': new FormControl('', Validators.required),
      'DirreccionPadre': new FormControl('', Validators.required),
      'TelefonoPadre': new FormControl('', Validators.required),
      'Barrio Padre': new FormControl('', Validators.required),

      // Datos de la madre
      'NombreMadre': new FormControl('', Validators.required),
      'OcupacionMadre': new FormControl('', Validators.required),
      'DirreccionMadre': new FormControl('', Validators.required),
      'TelefonoMadre': new FormControl('', Validators.required),
      'BarrioMadre': new FormControl('', Validators.required),

      // Datos referencia
      'NombreReferencia': new FormControl('', Validators.required),
      'OcupacionReferencia': new FormControl('', Validators.required),
      'TelefonoReferencia': new FormControl('', Validators.required),

      //Datos Empresa flores
      'NombreEmpresa': new FormControl('', Validators.required),
      'DireccionEmpresa': new FormControl('', Validators.required),
      'telefonoEmpresa': new FormControl('', Validators.required),
      'nombreJefeInmediato': new FormControl('', Validators.required),
      'CargoEmpresa': new FormControl('', Validators.required),
      'fechaRetiroEmpresa': new FormControl('', Validators.required),
      'MotivodeRetiroEmpresa': new FormControl('', Validators.required),
      'EnqueAreaTieneExperiencia': new FormControl('', Validators.required),
      'TiempoTrabajado': new FormControl('', Validators.required),



      //Datos Prueba Conocimientos
      'NombresEmpresasFlores': new FormControl('', Validators.required),
      'AreasEmpresasFlores': new FormControl('', Validators.required),
      'CaliRenEmpresasFlores': new FormControl('', Validators.required),
      'PorqueCali': new FormControl('', Validators.required),

      //Datos Entrevista Virtual
      'CuantoViveEnlaZona': new FormControl('', Validators.required),
      'TipoVivienda': new FormControl('', Validators.required),
      opcionesSeleccionadas: new FormArray(controles),
      'estudiaActualmente': new FormControl('', Validators.required),
      opcionesSeleccionadas2: new FormArray(controles),
      'HijosACargo': new FormControl('', Validators.required),
      'QuienLosCuida': new FormControl('', Validators.required),


      //Con quien vive















    });

  }

  ngOnInit(): void {
    this.openDialog();
  }

  guardarDatos() { }




  hijos: number[] = [0, 1, 2, 3, 4, 5];

  //  Lista estado civil
  estadosCiviles: any[] = [
    {
      codigo: "SO",
      descripcion: "SO (Soltero)"
    },
    {
      codigo: "UL",
      descripcion: "UL (Unión Libre) "
    },
    {
      codigo: "CA",
      descripcion: "CA (Casado)"
    },
    {
      codigo: "SE",
      descripcion: "SE (Separado)"
    },
    {
      codigo: "VI",
      descripcion: "VI (Viudo)"
    }
  ];

  listadoDeNacionalidades: any[] = ["Colombiana", "Venezolana", "Estadounidense", "Ecuatoriana", "Peruana", "Española", "Cubana", "Argentina", "Mexicana"];

  listadoDepartamentos: any[] = ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Bogotá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"]

  listatiposdesangre: any[] = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"];

  listaGenero: any[] = ["M", "F"];

  opcionBinaria: any[] = ["Si", "No"];

  listamanos: any[] = [
    {
      mano: "Zurdo",
      descripcion: "Zurdo (Escribe con la mano izquierda)"
    },
    {
      mano: "Diestro",
      descripcion: "Diestro (Escribe con la mano derecha)"
    }
  ];

  listaEscolaridad: any[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "Otro"];

  listaEscoText: any[] = [
    {
      esco: "Educación básica primaria",
      descripcion: "Educación básica primaria - 1 a 5 Grado"
    },
    {
      esco: "Educación básica secundaria",
      descripcion: "Educación básica secundaria - 6 a 9 Grado"
    },
    {
      esco: "Educación media académica",
      descripcion: "Educación básica secundaria - 10 a 11 Grado"
    },
    {
      esco: "Otro",
      descripcion: "Otro (Escribir primero titulo luego nombre) Ej: Técnico Electricista"
    }

  ];

  tallas: any[] = ["4", "6", "8", "10", "12", "14", "16", "34", "36", "38", "40", "42", "44"];

  tallasCalzado: any[] = ["35", "36", "37", "39", "40", "41", "42", "44"];

  listaParentescosFamiliares: any[] = [
    "Padre", "Madre", "Abuelo/Abuela", "Bisabuelo/Bisabuela", "Tío/Tía", "Primo/Prima", "Sobrino/Sobrina", "Hermano/Hermana", "Cuñado/Cuñada", "Esposo/Esposa", "Hijo/Hija", "Nieto/Nieta", "Bisnieto/Bisnieta", "Suegro/Suegra", "Yerno/Nuera", "Hermanastro/Hermanastra", "Medio hermano/Media hermana", "Padre adoptivo", "Madre adoptiva", "Hijo adoptivo", "Hija adoptiva", "Abuelo adoptivo", "Abuela adoptiva", "Padre biológico", "Madre biológica", "Hijo biológico", "Hija biológica", "Padre de crianza", "Madre de crianza", "Hijo de crianza", "Hija de crianza", "Tutor legal", "Curador legal", "Padrino/Madrina", "Compadre/Comadre", "Concubino/Concubina", "Ex-esposo/Ex-esposa", "Amigo/Amiga", "Ninguno"
  ];

  Ocupacion: any[] = ["Empleado", "Independiente", "Hogar (Am@ de casa)", "Desempleado", "Otro"];

  listaMotivosRetiro: any[] = ["Renuncia voluntaria", "Despido", "Reducción de personal", "Cierre de la empresa", "Fin de contrato temporal", "Abandono de cargo"]

  listaAreas: any[] = ["Cultivo", "Poscosecha", "Ambas", "Otro"];

  listaCalificaciones: any[] = ["Bajo", "Medio", "Excelente"];

  listaDuracion: any[] = ["Menos de un mes", "3 meses", "6 meses", "1 año", "2 años", "Mas de 2 años", "Toda la vida"];

  listatiposVivienda: any[] = ["Casa", "Apartamento","Casa-lote","Finca","Habitación"];

  listaPosiblesRespuestasConquienVive: any[] = [
    "Amigos", "Abuelo", "Abuela", "Pareja", "Papa", "Mama", "Hermano", "Hermana",
    "Tio", "Tia", "Primo", "Prima", "Sobrino", "Sobrina"
  ];

  listaPersonasQueCuidan: any[] = ["Yo", "Pareja", "Abuelos", "Tios", "Amigos", "Jardín", "Son independientes", "Familia (Si los cuida mas de un familiar o son parientes de mi pareja)", "No tiene hijos", "Colegio", "Universidad", "Amig@s", "Niñera", "Cuñad@", "Dueña apartamento"]

  listaPosiblesRespuestasPersonasACargo: any[] = ["Hijos", "Abuelos", "Papas", "Hermanos", "Personas con cuidados especialas", "Otro", "Tios"]

  opcionesDeExperiencia: any[] = ["Sector Floricultor (Poscosecha- Clasificación, Boncheo, Empaque, Cuarto frío)", "Sector Floricultor (Calidad- Mipe)", "Sector Floricultor (área de mantenimiento- Ornatos, Trabajo en alturas, Mecánicos, Jefaturas y supervisión)", "Sector Comercial (Ventas)", "Sector Industrial (Alimentos- Textil- Transporte)", "Sector Financiero", "Sector Administrativo y Contable", "Sin experiencia"]

  tiempoTrabajado: any[]= ["De 15 días a 1 mes (Una temporada)", "De 2 a 6 meses", "Más de 6 meses", "Un año o más", "Añadir opción o añadir respuesta 'Otro'"]


  clearAux() {
    this.formHojaDeVida.get('aux')?.setValue('');
  }


  // Comenzar las fechas desde un año en especifico
  startDate = new Date(1990, 0, 1);

  // visualizaciones las capturas de la cedula
  public previsualizacion: string | undefined;
  public previsualizacion2: string | undefined;
  public archivos: any = [];

  get nivelEscolaridad() {
    return this.formHojaDeVida.get('nivelEscolaridad') as FormControl
  }

  mostrar13 = false;
  mostrar14 = false;
  mostrar15 = false;
  mostrar16 = false;
  mostrar17 = false;
  mostrar18 = false;

  checked = false;
  indeterminate = false;
  disabled = false;

  ver(): void {
    console.log(this.formHojaDeVida.value)
    console.log(this.datosHoja)
  }



  //Funcion para extraer el contenido del otro html
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Funciones para seleccionar la foto o tamarla desde el celular
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
  }

  capturarFile2(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion2 = imagen.base;
      console.log(imagen);
    })
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return image;
    } catch (e) {
      return null;
    }
  }
  )

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }
}

// exportacion de la pagina modal de tratamiento de datos
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',

})
export class DialogContentExampleDialog {
  constructor(private _router: Router) { }

  Noacepto() {
    this._router.navigate(['']);
  }
}
