import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  n!: number ;
  series: number[] = [];
  isInputValid = true;
  

  generateSeries() {
    if (this.n <= 0 || !Number.isInteger(this.n) || this.n.toString().length > 5) {
      this.series = [];
      this.isInputValid = false;
    } else if (this.n === 1) {
      this.series = [0];
    } else {
      this.series = [0, 1];
      for (let i = 2; i < this.n; i++) {
        this.series.push(this.series[i - 1] + this.series[i - 2]);
      }
      this.isInputValid = true;
    }
  }
 
}
