import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    { name: 'Bob', type: 'Dog'},
    { name: 'Marley', type: 'Dog'},
    { name: 'Calabreso', type: 'Tiger'},
  ];

}
