import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrabajo } from 'src/app/modelos/ITrabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  private url:string = 'https://portfolioacv.herokuapp.com';
  constructor(private http: HttpClient) { }

  public obtenerTrabajo(id:number):Observable<ITrabajo> {
    return this.http.get<ITrabajo>(`${this.url}/trabajo/${id}`);
  }

  public obtenerTrabajos():Observable<ITrabajo[]> {
    return this.http.get<ITrabajo[]>(`${this.url}/trabajos/`);
  }

  public actualizarTrabajo(trabajo:ITrabajo):Observable<void> {
    return this.http.post<void>(`${this.url}/trabajos/editar`,trabajo);
  }

  public eliminarTrabajo(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/trabajos/eliminar/${id}`);
  }

  public agregarTrabajo(trabajo:ITrabajo):Observable<void> {
    return this.http.post<void>(`${this.url}/trabajos/agregar`,trabajo);
  }
}
