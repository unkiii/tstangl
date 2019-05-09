import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerComponent } from './components/pagines/primer/primer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SegonComponent } from './components/pagines/segon/segon.component';
import { TercerComponent } from './components/pagines/tercer/tercer.component';
import { HomeComponent } from './components/pagines/home/home.component';
import { UsuarisComponent } from './components/pagines/usuaris/usuaris.component';
import { UsuariscrudComponent } from './components/pagines/usuariscrud/usuariscrud.component';
import { ListarComponent } from './components/pagines/Persona/listar/listar.component';
import { AddComponent } from './components/pagines/Persona/add/add.component';
import { EditComponent } from './components/pagines/Persona/edit/edit.component';
 
const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'primer', component: PrimerComponent },
  { path: 'segon', component: SegonComponent },
  { path: 'tercer', component: TercerComponent },  
  { path: 'usuaris', component: UsuarisComponent },  
  { path: 'usuariscrud', component: UsuariscrudComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,      
      { 
        enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
