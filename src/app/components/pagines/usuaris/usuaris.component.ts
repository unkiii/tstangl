import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'usuaris',
    templateUrl: 'usuaris.component.html',
    styleUrls: ['usuaris.component.scss']
})
export class UsuarisComponent  implements OnInit {
    title = 'demo131';
    users: any[] = [];
  
    constructor(
      protected userService: UserService
    ) {
    }
  
    ngOnInit() {
      this.userService.getUsers()
      .subscribe(
        (data) => { // Success
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  