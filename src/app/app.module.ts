//// Modules imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//// Firebase Installation
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

//// Components Imports 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


///// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMX7H-6u0MXZOAdimSc77UNo6gu8AWceo",
  authDomain: "dokkanz-9b743.firebaseapp.com",
  databaseURL: "https://dokkanz-9b743.firebaseio.com",
  projectId: "dokkanz-9b743",
  storageBucket: "dokkanz-9b743.appspot.com",
  messagingSenderId: "689252389436",
  appId: "1:689252389436:web:fc1692207923aba53aa939",
  measurementId: "G-Q1LXYE5TTZ"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
