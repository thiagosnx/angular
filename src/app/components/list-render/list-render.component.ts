import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Bob', type: 'Dog', age: 4},
    { name: 'Marley', type: 'Dog', age: 3},
    { name: 'Calabreso', type: 'Tiger', age: 10},
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

}
