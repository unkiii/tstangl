// Angular Imports
import { NgModule } from '@angular/core';

import {CarouselModule} from "ngx-carousel-lib";

// This Module's Components
import { CapcaleraComponent } from './capcalera.component';


@NgModule({
    imports: [
        CarouselModule
        
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
