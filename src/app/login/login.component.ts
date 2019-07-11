import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar) { }

  ngOnInit() {}

  logout(): void {
    this.afAuth.auth.signOut().catch(error => {
      this.snackBar.open(error.message, "OK", {duration: 5000});
    });
  }

  login(): void {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).catch(error => {
      this.snackBar.open(error.message, "OK", {duration: 5000})
    });
  }

}
