import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  ngOnInit(): void {
  }

  hijos=0;

  startDate = new Date(1990, 0, 1);


  public previsualizacion: string | undefined;
  public previsualizacion2: string | undefined;

  
  public archivos: any = []
  public loading: boolean | undefined
  
  
  mostrar = false;
  mostrar2 = false;
  mostrar3 = false;
  mostrar4 = false;
  mostrar5 = false;
  mostrar6 = false;
  mostrar7 = false;
  mostrar8 = false;
  mostrar9 = false;
  mostrar10 = false;
  mostrar11 = false;
  mostrar12 = false;
  mostrar13 = false;
  mostrar14 = false;
  mostrar15 = false;
  mostrar16 = false;
  mostrar17 = false;
  mostrar18 = false;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;


  constructor(private sanitizer: DomSanitizer) { }


  capturarFile(event : any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
  }

  capturarFile2(event : any) {
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

