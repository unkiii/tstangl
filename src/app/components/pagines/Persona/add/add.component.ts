import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from "src/app/Service/ServiceService";
import { Persona } from "src/app/Modelo/Persona";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

    Guardar(sname, ssname){      
      let perso: Persona = {
        id: null,
        name: sname,
        apellidos: ssname
      };

    this.service.createPersona(perso)
    .subscribe(data=>{
      alert("Se Agrego con exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
