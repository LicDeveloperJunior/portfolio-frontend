import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  login({email, contrasenia}:any) {
    return signInWithEmailAndPassword(this.auth, email, contrasenia);
  }

  logout() {
    return signOut(this.auth);
  }

  estaLogeado():boolean {
    return this.auth.currentUser != null;
  }
}
