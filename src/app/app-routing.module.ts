import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: 'full'},
  {path: "inicio", component: InicioComponent, pathMatch: 'full' },
  {path: "sobre-mi", component: SobreMiComponent, pathMatch: 'full'},
  {path: "formacion", component: FormacionComponent, pathMatch: 'full'},
  {path: "trabajos", component: TrabajosComponent, pathMatch: 'full'},
  {path: "contacto", component: ContactoComponent, pathMatch: 'full'},
  {path: "**", component: PaginaErrorComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
