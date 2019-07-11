import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-manager';
  constructor(public afAuth: AngularFireAuth) {

  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
