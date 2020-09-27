import { Component, VERSION } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  user : User;

  onUserChanged(user: User) : void{
    console.log("new user :) ", user);
    this.user = user;
  }
}
