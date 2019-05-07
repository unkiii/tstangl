import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lmenu',
    templateUrl: 'lmenu.component.html',
    styleUrls: ['lmenu.component.scss']
})
export class LmenuComponent implements OnInit {
    text = "Això és el menù";

    ngOnInit() {
        console.log('iniciant la capçalera...');
      }
}
