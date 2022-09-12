import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soy-empresa-interesada-info',
  templateUrl: './soy-empresa-interesada-info.component.html',
  styleUrls: ['./soy-empresa-interesada-info.component.css']
})
export class SoyEmpresaInteresadaInfoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  GotoCortizador() {
    this._router.navigate(['cortizador']);
  }

}
