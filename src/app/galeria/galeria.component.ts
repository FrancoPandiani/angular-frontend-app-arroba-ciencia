import { Component, OnInit } from '@angular/core';
import { Image } from '../Models/Imagen';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public titulo: string = 'Galeria de Arroba Ciencia';
  public images = [
    {
      url: '/assets/imagenes/AC1.jpeg',
      row: '1/3',
    },
    {
      url: '/assets/imagenes/AC2.jpeg',
      row: '2/4',
    },
    {
      url: '/assets/imagenes/AC3.jpeg',
    },
    {
      url: '/assets/imagenes/AC4.jpeg',
    },
    {
      url: '/assets/imagenes/AC5.jpeg',
    },
    {
      url: '/assets/imagenes/AC6.jpeg',
      row: '2/4',
    },
    {
      url: '/assets/imagenes/AC7.jpeg',
    },
    {
      url: '/assets/imagenes/AC9.jpeg',
    },
    {
      url: '/assets/imagenes/AC10.jpeg',
    },
  ] as Array<Image>;

  constructor() {}

  ngOnInit(): void {}
}
