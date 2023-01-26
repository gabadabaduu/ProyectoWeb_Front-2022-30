import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.component.html',
  styleUrls: ['./paso5.component.css']
})
export class Paso5Component {
  constructor(private _router: Router) { }

  GoPaso6(){
    this._router.navigate(['paso6']);
  }
}
