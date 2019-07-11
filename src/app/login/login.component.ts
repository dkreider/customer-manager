import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

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

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {}

  logout(): void {
    this.authenticationService.logout();
  }

  login(): void {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
