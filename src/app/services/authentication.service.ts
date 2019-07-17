import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from "firebase/app";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { 
      this.authState = this.afAuth.authState;
    }

  login(username: string, password: string): Promise<auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(username, password);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  isUserLoggedIn(): Observable<firebase.User> {
    return this.afAuth.user;
  }

}
