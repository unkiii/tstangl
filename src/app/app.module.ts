import { NgModule } from '@angular/core';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// perso
import { CapcaleraModule } from './components/layout/capcalera/capcalera.module';
import { LmenuModule } from './components/layout/lmenu/lmenu.module';
import { CosModule } from './components/layout/cos/cos.module';
import { PeuModule } from './components/layout/peu/peu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './components/pagines/user.service';
import { UsuarisModule } from './components/pagines/usuaris/usuaris.module';
import { ServiceService } from "../app/Service/ServiceService";
import { UsuariscrudModule } from './components/pagines/usuariscrud/usuariscrud.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,    
    FormsModule,
    AppRoutingModule,
    CapcaleraModule,
    LmenuModule,
    CosModule,
    PeuModule,
    UsuarisModule,
    UsuariscrudModule,
      
  ],
  providers: [ServiceService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor(){
  
  }

 }
