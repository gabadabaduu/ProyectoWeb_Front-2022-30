import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component {
  constructor(private _router: Router) { }

  GoPaso3(){
    this._router.navigate(['paso3']);
  }
}
