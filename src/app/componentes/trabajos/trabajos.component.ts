import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrashCan, faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ITrabajo } from 'src/app/modelos/ITrabajo';
import { TrabajoService } from 'src/app/servicios/api/trabajo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.less']
})
export class TrabajosComponent implements OnInit {
  private url: string = environment.urlApiBackend;
  public trabajos!: ITrabajo[];
  public editTrabajo?: ITrabajo;
  agregarIcon = faPlus;
  editarIcon = faPencil;
  eliminarIcon = faTrashCan;

  constructor(private trabajoService: TrabajoService) { }

  ngOnInit(): void {
    this.obtenerTrabajos();
  }

  public obtenerTrabajos() {
    this.trabajoService.obtenerTrabajos().subscribe({
      next: (response: ITrabajo[]) => {
        this.trabajos = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public agregarTrabajo(formHab: NgForm) {
    console.log(formHab.value);
    this.trabajoService.agregarTrabajo(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarTrabajo(id: number) {
    this.trabajoService.eliminarTrabajo(id).subscribe({
      next: () => {
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public editarTrabajo(formHab: NgForm) {
    console.log(formHab.value);
    this.trabajoService.actualizarTrabajo(formHab.value).subscribe({
      next: () => {
        formHab.reset();
        this.obtenerTrabajos();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  estaLogeado(): boolean {
    return false;
  }
}
