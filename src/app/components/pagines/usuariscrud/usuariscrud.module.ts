// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UsuariscrudComponent } from './usuariscrud.component';
import { ServiceService } from 'src/app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from '../Persona/listar/listar.component';
import { AddComponent } from '../Persona/add/add.component';
import { EditComponent } from '../Persona/edit/edit.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        UsuariscrudComponent,
        ListarComponent,
        AddComponent,
        EditComponent,        
    ],
    exports: [
        UsuariscrudComponent,
    ],
    providers: [ServiceService],
})
export class UsuariscrudModule {
    constructor(){
  
    }
}
