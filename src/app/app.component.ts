import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    // console.log('Button was clicked')
    console.log(`About to generate a password with the following options:
    Includes Letters: ${this.includeLetters}
    Includes Numbers: ${this.includeLetters}
    Includes Symbols: ${this.includeLetters}
    `);
    this.password = 'My PASSWORD!!!';
  }
  getPassword() {
    return this.password;
  }

}
