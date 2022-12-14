import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faInstagram, faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faUserSecret, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less']
})
export class BarraSupNavComponent implements OnInit {
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
    private usuarioService :UsuarioService,
    private loginService :LoginService) {
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
    return this.loginService.estaLogeado();
  }

  public logear(formLogin :NgForm){
    this.loginService.login(formLogin.value)
    .then(response => {console.log("Has iniciado sesi??n")})
    .catch(error => console.log("No se pudo iniciar sesi??n"))
    .finally(() => formLogin.reset())
  }

  public cerrarSesion() {
    this.loginService.logout()
    .then(() => {console.log('Se cerro la sesi??n')})
    .catch(error => (console.log("No se pudo cerrar sesi??n")))
  }
}
