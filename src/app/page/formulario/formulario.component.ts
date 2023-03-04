import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  startDate = new Date(1990, 0, 1);
  
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

  hijos = 0;
}
