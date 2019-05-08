import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerComponent } from './components/pagines/primer/primer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SegonComponent } from './components/pagines/segon/segon.component';
import { TercerComponent } from './components/pagines/tercer/tercer.component';
import { HomeComponent } from './components/pagines/home/home.component';
import { UserComponent } from './components/pagines/user/user.component';
import { AddUserComponent } from './components/pagines/add-user/add-user.component';
 
const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'primer', component: PrimerComponent },
  { path: 'segon', component: SegonComponent },
  { path: 'tercer', component: TercerComponent },  
  { path: '**', component: PageNotFoundComponent },  
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent }
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
