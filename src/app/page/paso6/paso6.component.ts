import { Component } from '@angular/core';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.component.html',
  styleUrls: ['./paso6.component.css']
})
export class Paso6Component {
  constructor(private _router: Router) { }

  Fin(){
    this._router.navigate(['fin']);
  }
  
}
