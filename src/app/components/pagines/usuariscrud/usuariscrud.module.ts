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
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        MatMenuModule,
        AppRoutingModule
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
