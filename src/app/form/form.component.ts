import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',

})
export class FormComponent {
          num1: number = 0;
          num2: number = 0;
          sun : number = 0;

          onClick(op: string){
            switch(op){
              case '+': this.sun = this.num1 + this.num2; break
              case '-': this.sun = this.num1 - this.num2; break
              case '/': this.sun = this.num1 / this.num2; break
              case '*': this.sun = this.num1 * this.num2; break
              case '**': this.sun = this.num1 ** this.num2; break
              case '%': this.sun = this.num1 % this.num2; break
            }
           }
}
