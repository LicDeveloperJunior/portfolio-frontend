import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {
  emoteInicio = faUserGraduate;
  usuario?:IUsuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  public obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next:(response: IUsuario | undefined) => {
        this.usuario = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public editarUsuario(usuario: NgForm) {
    this.usuarioService.editarUsuario(usuario.value).subscribe({
      next:() => {
        usuario.reset();
        this.obtenerUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  estaLogeado():boolean {
    if (this.usuario != null || undefined) {
      return true;
    }
    return false;
  }

}
