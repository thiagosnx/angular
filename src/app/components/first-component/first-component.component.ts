import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name:string = 'Thiago';
  work:string = 'Dev';
  hobbies = ["estudar", "codar", "apostar"];
  car = {
    name: 'gtr',
    year: '2024'
  }

}
