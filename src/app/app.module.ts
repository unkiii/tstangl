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
import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CapcaleraModule,
    LmenuModule,
    CosModule,
    PeuModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor(router: Router){
  
  }

 }
