import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFormacion } from 'src/app/modelos/IFormacion';
import { FormacionService } from 'src/app/servicios/api/formacion.service';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent implements OnInit {
  public formaciones!: IFormacion[];
  editFormacion?: IFormacion;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  eliminarIcon = faTrashCan;

  constructor(private formacionService: FormacionService,
    private loginService :LoginService) { }

  ngOnInit(): void {
    this.obtenerFormaciones();
  }

  public obtenerFormaciones() {
    this.formacionService.obtenerFormaciones().subscribe({
      next: (response: IFormacion[]) => {
        this.formaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public agregarFormacion(formHab: NgForm) {
    this.formacionService.agregarFormacion(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerFormaciones();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarFormacion(id: number) {
    this.formacionService.eliminarFormacion(id).subscribe({
      next: () => {
        this.obtenerFormaciones();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public editarFormacion(formHab: NgForm) {
    this.formacionService.actualizarFormacion(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerFormaciones();
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
