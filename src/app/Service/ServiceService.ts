import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../Modelo/Persona";
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  Url = 'http://localhost:8080/user';

  // Llista
  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

  // Crear
  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona);
  }

// Editar
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id, persona);
  }

  // Delete
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
  
}
