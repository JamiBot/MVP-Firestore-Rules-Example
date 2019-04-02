import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

var config = {
  apiKey: "AIzaSyCtZbBiuvjv2DfUrlghcEPOXcViUDod9RA",
  authDomain: "ff-hello-world.firebaseapp.com",
  databaseURL: "https://ff-hello-world.firebaseio.com",
  projectId: "ff-hello-world",
  storageBucket: "",
  messagingSenderId: "562189373242"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
