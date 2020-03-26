import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth
    ) { }

    loginUser(email: string, password: string ) {
        return new Promise((resolve, reject) => {
            this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), error => reject(error));
        });
    }

    registerUser(email: string, password: string ) {
        return new Promise((resolve, reject) => {
            this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), error => reject(error));
        })
    }

    logout() {
        this.angularFireAuth.auth.signOut();
    }

    get currentUser() {
        return this.angularFireAuth.auth.currentUser;
    }

    getAuth() {
        return this.angularFireAuth.authState;
    }

    isLoggedIn() {
        if (this.angularFireAuth.authState)
            return true;
        this.router.navigate(['/login']);
        return false;
    }
}