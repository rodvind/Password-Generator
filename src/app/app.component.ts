import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(userValue: string) {
    const parsedValue = parseInt(userValue);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
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
    // console.log(`About to generate a password with the following options:
    // Includes Letters: ${this.includeLetters}
    // Includes Numbers: ${this.includeLetters}
    // Includes Symbols: ${this.includeLetters}
    // `);
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyxz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    // this.password = 'My PASSWORD!!!';
    this.password = generatedPassword;
  }
  getPassword() {
    return this.password;
  }

}
