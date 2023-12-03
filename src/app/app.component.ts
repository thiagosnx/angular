import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Tenaci';
  userData = { 
    email: 'thiago@email',
    role: 'admin'
  };
  title = 'first';
}
