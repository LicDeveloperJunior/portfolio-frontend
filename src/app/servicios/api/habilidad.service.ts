import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { IHabilidad } from 'src/app/modelos/IHabilidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url:string = environment.urlApiBackend;
  constructor(private http: HttpClient) { }

  public obtenerHabilidad(id:number):Observable<IHabilidad> {
    return this.http.get<IHabilidad>(`${this.url}/habilidad/${id}`);
  }

  public obtenerHabilidades():Observable<IHabilidad[]> {
    return this.http.get<IHabilidad[]>(`${this.url}/habilidad/`);
  }

  public agregarHabilidad(habilidad:IHabilidad):Observable<IHabilidad> {
      return this.http.post<IHabilidad>(`${this.url}/habilidad/agregar`,habilidad);
  }

  public actualizarHabilidad(habilidad:IHabilidad):Observable<IHabilidad> {
    return this.http.post<IHabilidad>(`${this.url}/habilidad/editar`, habilidad);
  }

  public eliminarHabilidad(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/habilidad/eliminar/${id}`);
  }
}
