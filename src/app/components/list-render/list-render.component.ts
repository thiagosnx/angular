import { Component } from '@angular/core';

import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService){
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name); //exclui so no front, é preciso para n precisar recarregar a pag
    this.listService.remove(animal.id).subscribe();//exclui de verdade (delete)
    //todas requisições precisam do .subscribe()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
