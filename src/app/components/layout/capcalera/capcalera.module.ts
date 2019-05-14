// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CapcaleraComponent } from './capcalera.component';
import { LmenuModule } from '../lmenu/lmenu.module';
import { LoginModule } from '../../pagines/login/login.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    imports: [
        LmenuModule,
        LoginModule,
        AppRoutingModule,
    ],
    declarations: [
        CapcaleraComponent,
    ],
    exports: [
        CapcaleraComponent,
    ]
})
export class CapcaleraModule {

}
