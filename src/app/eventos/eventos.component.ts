import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fecha } from '../Models/Fecha';
import { Usuario } from '../Models/Usuario';
import { FechasserviceService } from '../Service/fechasService/fechas.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  usuarios!: Usuario[];
  fechas!: Fecha[];

  constructor(private service: FechasserviceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getFechas().subscribe((data) => {
      this.fechas = data;
    });
  }
}
