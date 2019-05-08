// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UsuarisComponent } from './usuaris.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule
    ],    
    declarations: [
        UsuarisComponent,
    ],
    exports: [
        UsuarisComponent,
    ],
    providers: [UserService]
})
export class UsuarisModule {
    constructor(){
  
    }
}
