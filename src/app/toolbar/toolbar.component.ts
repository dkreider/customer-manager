import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout().then(function() {
      window.location.reload();
    }).catch(function(error) {
      console.log(error);
    });
  }

}
