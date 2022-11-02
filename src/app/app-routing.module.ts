import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent },
  {path: "sobre-mi", component: SobreMiComponent},
  {path: "formacion", component: FormacionComponent},
  {path: "trabajos", component: TrabajosComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "", redirectTo: "/inicio", pathMatch: 'full'},
  {path: "**", component: PaginaErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
