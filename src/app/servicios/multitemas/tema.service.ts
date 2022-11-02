import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IPropiedadesTema } from './itema-interface';
import {TEMAS} from "./tema-config"

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(@Inject(DOCUMENT) private document: Document) {
   }

   getTema():string {
    return localStorage.getItem('temaSeleccionado') || 'default';
   }

  setTema(nombre:string) {
    localStorage.setItem('temaSeleccionado', nombre);
    const tema :IPropiedadesTema = (TEMAS as any)[nombre];
    Object.keys(tema).forEach((estilo:string) => {
      this.document.documentElement.style.setProperty(
        `--${estilo}`,
        (tema as any)[estilo]
      )
    })
  }
}
