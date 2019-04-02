import { Component } from '@angular/core';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.setUpAuth();
  }

  setUpAuth() {
    this.afAuth.authState.subscribe(result => {
      if (this.afAuth.auth.currentUser) { // signed in
        console.log("is signed in");
      }
      else { // not signed in
        console.log("performed anonymous sign in");
        this.afAuth.auth.signInAnonymously();
      }
    });
  }

  go() {
    console.log("go");
    this.db.doc(`status/${this.afAuth.auth.currentUser.uid}`).set({date: new Date});
  }

}
