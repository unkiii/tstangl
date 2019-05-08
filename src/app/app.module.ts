import { NgModule } from '@angular/core';
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// perso
import { CapcaleraModule } from './components/layout/capcalera/capcalera.module';
import { LmenuModule } from './components/layout/lmenu/lmenu.module';
import { CosModule } from './components/layout/cos/cos.module';
import { PeuModule } from './components/layout/peu/peu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './components/pagines/user.service';
import { UsuarisComponent } from './components/pagines/usuaris/usuaris.component';
import { UsuarisModule } from './components/pagines/usuaris/usuaris.module';


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
    PeuModule,
    HttpClientModule,
    FormsModule,
    UsuarisModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { 

  constructor(){
  
  }

 }
