import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService{

    constructor(private afAuth: AngularFireAuth){

    }

    login(email: string, password: string): Observable<boolean>{
        return Observable.fromPromise(
            this.afAuth.auth.signInWithEmailAndPassword(email,password)
        ).map( resp => {
            return true;
        }).catch( err => {
            console.error(err);
            return Observable.of(false);
        });
    }

    logout(): Observable<boolean>{
        return Observable.fromPromise(
            this.afAuth.auth.signOut()
        ).map( resp => {
            return true;
        }).catch( err => {
            console.error(err);
            return Observable.of(false);
        })
    }

}