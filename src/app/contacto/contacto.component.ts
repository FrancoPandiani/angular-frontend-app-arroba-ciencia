import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UsuarioserviceService } from '../Service/usuariosService/usuario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  public exform!: FormGroup;

  constructor(private usuarioService: UsuarioserviceService) {}

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
      consulta: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(100),
      ]),
    });
  }
  enviarData() {
    this.usuarioService
      .post(this.usuarioService.urlUsuarios, this.exform.value)
      .subscribe((respuesta) => {
        console.log('Registro Exitoso.');
        this.exform.reset();
        
      });
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
}
