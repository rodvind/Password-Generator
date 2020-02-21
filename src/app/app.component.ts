import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  onButtonClick() {
    // console.log('Button was clicked')
    this.password = 'My PASSWORD!!!';
  }
  getPassword() {
    return this.password;
  }
}
