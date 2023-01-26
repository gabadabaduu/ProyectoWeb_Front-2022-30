import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component {
  constructor(private _router: Router) { }

  GoPaso4(){
    this._router.navigate(['paso4']);
  }
}
