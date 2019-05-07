import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cos',
    templateUrl: 'cos.component.html',
    styleUrls: ['cos.component.scss']
})
export class CosComponent  implements OnInit  {
    text = "Això és el cos";

    ngOnInit() {
        console.log('iniciant el cos...');
      }
}
