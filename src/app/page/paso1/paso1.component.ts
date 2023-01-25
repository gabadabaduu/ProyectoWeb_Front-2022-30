import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})

export class Paso1Component {

  constructor(private _router: Router, private _ar: ActivatedRoute) { }

  GoPaso2(){
    this._router.navigate(['paso2']);
  }
}
