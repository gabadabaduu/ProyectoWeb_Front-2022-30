import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soy-empresa-interesada-home',
  templateUrl: './soy-empresa-interesada-home.component.html',
  styleUrls: ['./soy-empresa-interesada-home.component.css']
})
export class SoyEmpresaInteresadaHomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  
  GoToInterestedCompany(){
    this._router.navigate(['interesada']);
  }
  

}
