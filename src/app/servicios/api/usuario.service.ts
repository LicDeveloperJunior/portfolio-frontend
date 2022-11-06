import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/modelos/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

<<<<<<< HEAD
  private url:string = 'https://portfolioacv.herokuapp.com';
=======
  private url:string = 'https://portfolioacv.herokuapp.com/';
>>>>>>> 6439f41844106da1234e604b48bcbce63a2b3d03

  constructor(private http:HttpClient) { }

  public obtenerUsuario():Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/usuarios/1`);
  }

  public obtenerUsuarios():Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.url}/usuarios/`);
  }

  public agregarUsuario(usuario: IUsuario):Observable<void> {
    return this.http.post<void>(`${this.url}/usuarios/agregar`, usuario);
  }

  public editarUsuario(usuario: IUsuario):Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.url}/usuarios/editar`, usuario);
  }
}
