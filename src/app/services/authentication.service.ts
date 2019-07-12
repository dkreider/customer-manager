import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from "firebase/app";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseAuth } from '@angular/fire';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { }

  login(username: string, password: string): Promise<auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(username, password);

  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  isUserLoggedIn(): boolean {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }

}
