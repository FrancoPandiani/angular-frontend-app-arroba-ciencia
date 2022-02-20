import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../Models/Usuario';
import { environment } from '../../../environments/environment';

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
