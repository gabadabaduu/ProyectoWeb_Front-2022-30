import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  

  constructor(private _router: Router, private _ar: ActivatedRoute) { }


  ngOnInit(): void {
    
  }


  GoPaso1(){
    this._router.navigate(['paso1']);
  }

 
}

