import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IHabilidad } from 'src/app/modelos/IHabilidad';
import { HabilidadService } from 'src/app/servicios/api/habilidad.service';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less']
})
export class HabilidadComponent implements OnInit {
  public habilidades :IHabilidad[] = [];
  eliminarIcon = faTrashCan;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  editHabilidad?: IHabilidad;
  constructor(private habilidadService :HabilidadService,
    private loginService :LoginService) { }

  ngOnInit(): void {
    this.obtenerHabildades();
  }

  public obtenerHabildades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: (response :IHabilidad[]) => {
        this.habilidades = response;
        console.log(response)
      },
      error: (error :HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public agregarHabilidad(formHab: NgForm) {
    this.habilidadService.agregarHabilidad(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarHabilidad(id: number) {
    this.habilidadService.eliminarHabilidad(id).subscribe({
      next: () => {
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public editarHabilidad(formHab: NgForm) {
    this.habilidadService.actualizarHabilidad(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerHabildades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  estaLogeado():boolean {
    return this.loginService.estaLogeado();
  }
}
