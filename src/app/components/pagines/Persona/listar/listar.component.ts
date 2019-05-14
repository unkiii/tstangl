import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/Service/ServiceService";
import { Router } from '@angular/router';
import { Persona } from "src/app/Modelo/Persona";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  // Editar
  Editar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

// Delete

Delete(persona:Persona):void{
  this.service.deletePersona(persona)
  .subscribe(data=>{
    this.personas=this.personas.filter(p=>p!==persona);
    alert("Usuario eliminado...");
  })  
}
}