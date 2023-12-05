import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  show:boolean = false;

  showMsg():void{
    this.show = !this.show; //toggle, sempre que clica ele inverte o valor
  }

}
