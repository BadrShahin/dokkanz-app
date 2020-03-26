//// Modules imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//// Firebase Installation
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

//// Components Imports 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//// Services imports 
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';


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
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
