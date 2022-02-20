import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'arrobacienciaFront';

  // agregado para poder hacer la conexion con la bd
  constructor(private router: Router) {}

  Listar() {
    this.router.navigate(['eventos']);
  }
}
