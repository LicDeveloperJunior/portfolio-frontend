import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faMobileScreenButton, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { ContactFormService } from 'src/app/servicios/api-correo/contact-form.service';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent implements OnInit {
  @ViewChild('modalContacto') modalContact! :ModalComponent;
  @ViewChild('modalErrorContacto') modalErrorContact! :ModalComponent;
  usuario?: IUsuario;
  telef = faMobileScreenButton;
  lugar = faLocationDot;
  iconoEmail = faEnvelope;

  contactForm! :FormGroup;

  constructor(private usuarioService: UsuarioService, private readonly fb :FormBuilder,
     private formContactService :ContactFormService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.contactForm = this.initForm();
  }

  public obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (response: IUsuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  initForm():FormGroup {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      asunto: ['', [Validators.required]],
      texto: ['', [Validators.minLength(5), Validators.maxLength(500), Validators.required]],
    })
  }

  enviarCorreo(correo :FormGroup) {
    this.formContactService.enviarCorreo(correo);
    this.modalContact.toggleModal();
    correo.reset();
  }
}
