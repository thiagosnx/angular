import { Component } from '@angular/core';

import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

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

  constructor(private listService: ListService){}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    console.log("ok")
    this.animals = this.listService.remove(this.animals,animal);
  }

}
