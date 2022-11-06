import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHabilidad } from 'src/app/modelos/IHabilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
<<<<<<< HEAD
  private url:string = 'https://portfolioacv.herokuapp.com';
=======
  private url:string = 'https://portfolioacv.herokuapp.com/';
>>>>>>> 6439f41844106da1234e604b48bcbce63a2b3d03
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

  public agregarHabilidad2(habilidad:IHabilidad, idUsuario:number):Observable<IHabilidad> {
    return this.http.post<IHabilidad>(`${this.url}/habilidad/agregar/${idUsuario}`, habilidad);
  }

  public actualizarHabilidad(habilidad:IHabilidad):Observable<IHabilidad> {
    return this.http.post<IHabilidad>(`${this.url}/habilidad/editar`, habilidad);
  }

  public eliminarHabilidad(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/habilidad/eliminar/${id}`);
  }
}
