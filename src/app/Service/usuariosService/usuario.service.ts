import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Usuario } from 'src/app/Models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioserviceService {
  baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  urlUsuarios = `${this.baseUrl}usuarios`;

  getUsuarios() {
    return this.http.get<Usuario[]>(this.urlUsuarios);
  }

  post(url: string, body: any) {
    return this.http.post(url, body);
  }
}
