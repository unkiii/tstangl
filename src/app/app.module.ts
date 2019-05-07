import { NgModule } from '@angular/core';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// perso
import { CapcaleraModule } from './components/layout/capcalera/capcalera.module';
import { LmenuModule } from './components/layout/lmenu/lmenu.module';
import { CosModule } from './components/layout/cos/cos.module';
import { PeuModule } from './components/layout/peu/peu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



export const firebaseConfig = {
  apikey: 'AIzaSyB9SSl3KHWdT99BvN_pRJM1XcwwmzSpmic',
  authDomain: 'testangular-63726.firebaseapp.com',
  databaseURL: 'https://testangular-63726.firebaseapp.com',
  projectId: 'testangular-63726',
  storageBucket: 'testangular-63726.appspot.com',
  messaginSenderId: ''
};


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

  constructor(){
  
  }

 }
