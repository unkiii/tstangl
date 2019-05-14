import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean = false;

  constructor(private router:Router){}

  Listar(){
      this.router.navigate(["listar"]);
  }
  Nuevo(){
      this.router.navigate(["add"]);
  }
  Editar(){
      this.router.navigate(["edit"]);
  }
  Guardar(){
    this.router.navigate(["guardar"]);
  }
}
