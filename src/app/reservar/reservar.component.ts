import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fecha } from '../Models/Fecha';
import { FechasserviceService } from '../Service/fechasService/fechas.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
})
export class ReservarComponent implements OnInit {
  public exform!: FormGroup;
  @Input() public fecha!: Fecha;

  constructor( private fechaService : FechasserviceService) {}

  ngOnInit(): void {
    this.exform = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      cantChicos: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }
  enviarData() {
    this.fechaService
    .guardarFecha( this.exform.value,this.fecha.id)
    .subscribe((respuesta) => {
      console.log('Actualizado.');
      this.exform.reset();
    });
    this.exform.reset();
  }

  get nombre() {
    return this.exform.get('nombre');
  }
  get apellido() {
    return this.exform.get('apellido');
  }
  get email() {
    return this.exform.get('email');
  }
  get consulta() {
    return this.exform.get('consulta');
  }
  get cantChicos() {
    return this.exform.get('cantChicos');
  }
}
