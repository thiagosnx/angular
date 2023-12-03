import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name:string = ''; //posso iniciar o dado assim, vazio
  @Input() data!: {email: string, role:string}; //ou colocar uma exclamação no dado para dizer q vou iniciar, pro ts relaxar

}
