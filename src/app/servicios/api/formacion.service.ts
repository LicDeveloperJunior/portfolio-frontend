import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormacion } from 'src/app/modelos/IFormacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private url:string = environment.urlApiBackend;
  constructor(private http: HttpClient) { }

  public obtenerFormacion(id:Number):Observable<IFormacion> {
    return this.http.get<IFormacion>(`${this.url}/formacion/${id}`)
  }

  public obtenerFormaciones():Observable<IFormacion[]>{
    return this.http.get<IFormacion[]>(`${this.url}/formacion/`)
  }

  public agregarFormacion(formacion :IFormacion):Observable<IFormacion> {
    return this.http.post<IFormacion>(`${this.url}/formacion/agregar`, formacion)
  }

  public actualizarFormacion(formacion :IFormacion):Observable<IFormacion> {
    return this.http.post<IFormacion>(`${this.url}/formacion/editar`, formacion)
  }

  public eliminarFormacion(id:Number):Observable<void> {
    return this.http.delete<void>(`${this.url}/formacion/eliminar/${id}`);
  }
}
