import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css']
})
export class Paso4Component {
  constructor(private _router: Router) { }

  GoPaso5(){
    this._router.navigate(['paso5']);
  }
}
