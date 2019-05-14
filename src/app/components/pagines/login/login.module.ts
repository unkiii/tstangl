// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoginComponent } from './login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {


    
}
