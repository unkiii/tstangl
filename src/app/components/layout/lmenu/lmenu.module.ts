// Angular Imports
import {NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

// This Module's Components
import { LmenuComponent } from './lmenu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    imports: [
        MatMenuModule,
        AppRoutingModule
    ],
    declarations: [
        LmenuComponent
    ],
    exports: [
        LmenuComponent
    ]
})
export class LmenuModule {

}
