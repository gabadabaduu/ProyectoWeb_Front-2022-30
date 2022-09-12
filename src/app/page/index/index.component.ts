import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  GoToIamEmployee() {
    this._router.navigate(['soy-login-trabajador-home']);
  }
  GotoIambusiness(){
    this._router.navigate(['soy-login-empresa-home']);
  }

}
