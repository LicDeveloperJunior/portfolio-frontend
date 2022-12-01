import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  url:string = "https://formsubmit.co/agustincv1997@gmail.com";
  constructor(private http :HttpClient) { }

  enviarCorreo(form :FormGroup):Observable<any> {
    return this.http.post<any>(this.url, form.value);
  }
}
