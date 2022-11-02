import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSupNavComponent } from './componentes/barra-sup-nav/barra-sup-nav.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { BarraLatNavComponent } from './componentes/barra-lat-nav/barra-lat-nav.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ModalComponent } from './componentes/modals/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSupNavComponent,
    SobreMiComponent,
    BarraLatNavComponent,
    ContactoComponent,
    InicioComponent,
    FormacionComponent,
    TrabajosComponent,
    PaginaErrorComponent,
    HabilidadComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
