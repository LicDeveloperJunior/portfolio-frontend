import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  url:string = "https://formsubmit.co/agustincv1997@gmail.com";
  constructor(private http :HttpClient) { }

  enviarCorreo(form :FormGroup) {
    this.http.post<any>(this.url, form.value);
  }
}
