import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { }

  login(username: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(username, password).catch(error => {
      this.snackBar.open(error.message, "OK", {duration: 5000})
    });

  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  isUserLoggedIn(): boolean {
    if (this.afAuth.user) {
      return true;
    }
    return false;
  }

}
