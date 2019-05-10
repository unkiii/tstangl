import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'usuariscrud',
    templateUrl: 'usuariscrud.component.html',
    styleUrls: ['usuariscrud.component.scss']
})
export class UsuariscrudComponent {

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
