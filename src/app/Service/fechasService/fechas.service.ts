import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fecha } from 'src/app/Models/Fecha';

@Injectable({
  providedIn: 'root',
})
export class FechasserviceService {
  baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  urlFechas = `${this.baseUrl}fechas`;

  getFechas() {
    return this.http.get<Fecha[]>(this.urlFechas);
  }
  guardarFecha(ObjFecha: any, idFecha: number) {
    const url = `${this.urlFechas}/${idFecha}`;
    const headers = new HttpHeaders()
    .set('Origin', 'http://localhost:4200');
    const body = { ObjFecha };
    return this.http.post<any>(url, body);
  }
 
}
