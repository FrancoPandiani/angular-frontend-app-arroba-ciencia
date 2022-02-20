import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent implements OnInit {
  fotoBienvenida = '/assets/imagenes/AC_FONDO.jpg';
  constructor() {}

  ngOnInit(): void {}
}
