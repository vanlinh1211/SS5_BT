import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  output: number;
  first: number;
  second: number;
  operator = '+';
  background = 'black';

  constructor() {
  }

  ngOnInit() {
  }

  inputFirst(value) {
    this.first = Number(value);
  }

  inputSecond(value) {
    this.second = Number(value);
  }

  selectChange(value: string) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case 'x':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  changeColor(value){
    this.background = value;
  }

}
