// Angular Imports
import { NgModule } from '@angular/core';

import {CarouselModule} from "ngx-carousel-lib";

// This Module's Components
import { CapcaleraComponent } from './capcalera.component';
import { LmenuModule } from '../lmenu/lmenu.module';


@NgModule({
    imports: [
        CarouselModule,
        LmenuModule
        
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
