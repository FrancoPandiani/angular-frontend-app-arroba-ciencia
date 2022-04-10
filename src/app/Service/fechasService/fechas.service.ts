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

  urlFechas = `${this.baseUrl}api/eventos`;

  getFechas() {
    const headers = new HttpHeaders()
    //.set('Origin', 'http://localhost:4200')
   // .set('Access-Control-Allow-Origin', '*')
  //.set("Access-Control-Request-Method",'GET') 
 //.set("Access-Control-Request-Headers",'authorization')  
  //.set('authorization', 'Basic am9zZTEyMzpsYWxhbGE=');
    //.set('Host', 'localhost:8080');
    return this.http.get<Fecha[]>(this.urlFechas,{headers});
  }

  guardarFecha(ObjFecha: any, idFecha: number) {
    const url = `${this.urlFechas}/${idFecha}`;
    const headers = new HttpHeaders()
    //.set('Origin', 'http://localhost:4200')
    //.set('Access-Control-Allow-Origin', '*');
    //.set('authorization', 'Basic am9zZTEyMzpsYWxhbGE=');
    const body = { ObjFecha };
    return this.http.post<any>(url, body);
  }
 
}
