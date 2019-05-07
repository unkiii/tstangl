import { Component, OnInit } from '@angular/core';

  
@Component({
    selector: 'capcalera',
    templateUrl: 'capcalera.component.html',
    styleUrls: ['capcalera.component.scss']
})
export class CapcaleraComponent implements OnInit {
    text = "Això es la capçalera";

  
    ngOnInit() {
      console.log('iniciant la capçalera...');
    }
}
