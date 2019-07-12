import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verifyingCredentials: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(public authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {}

  logout(): void {
    this.authenticationService.logout();
  }

  login(): void {
    this.verifyingCredentials = true;
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).catch(error => {
      this.verifyingCredentials = false;
      this.snackBar.open(error.message, "OK", {duration: 5000})
    });
  }

}
