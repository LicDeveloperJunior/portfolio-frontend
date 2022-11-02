import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faUserSecret, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less']
})
export class BarraSupNavComponent implements OnInit {
  datos: any;
  insta = faInstagram;
  face = faFacebook;
  what = faWhatsapp;
  git = faGithub;
  link = faLinkedin;
  dark = faMoon;
  light = faSun;
  menu = faBars;
  user = faUserSecret;
  login = faRightToBracket;

  temaActual: string;
  usuario :IUsuario | undefined;

  constructor(private temaServicio: TemaService,
    private usuarioService :UsuarioService) {
    this.temaActual = this.temaServicio.getTema();
    this.temaServicio.setTema(this.temaServicio.getTema());
  }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  cambiarTema() {
    if (this.temaActual === "default") {
      this.temaActual = "dark";
      this.temaServicio.setTema("dark");
    } else {
      this.temaServicio.setTema("default");
      this.temaActual = "default";
    }
  }

  public obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (response :IUsuario) => {
        this.usuario = response;
      },
      error: (error :HttpErrorResponse) => {
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
