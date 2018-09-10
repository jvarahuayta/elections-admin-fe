import { RepositoryService } from "./contracts/repository.service";
import { User } from "../models/user";
import { BaseSpecification } from "../specifications/base/base.specification";
import { Observable } from "rxjs/Observable";
import { MyProfileSpecification } from "../specifications/user.specification";
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class UsersService implements RepositoryService<User>{

    constructor( private af: AngularFirestore, private afAuth: AngularFireAuth ){

    }

    get currentUser(): Observable<User>{
        return this.findOne(new MyProfileSpecification());
    }

    find(specification?: BaseSpecification): Observable<User[]> {
        return this.af.collection('users').valueChanges()
        .map( users => {
            return users.map( (user:any) => new User({
                dni: user.dni,
                name: user.name,
                roles: user.roles
            }));
        }).catch( err => {
            console.error(err);
            return Observable.of(null);
        });
    }

    findOne(specification?: BaseSpecification): Observable<User> {
        if( specification instanceof MyProfileSpecification ){            
            return this.afAuth.authState
            .flatMap( response => {
                if(!response) return Observable.of(null);
                var uid = response.uid;
                return this.af.doc(`users/${uid}`).valueChanges()
                .map( response => {                    
                    return new User(response);
                })
            })
        }
        throw new Error("Method not implemented.");
    }

    add(T: any): Observable<User> {
        throw new Error("Method not implemented.");
    }
    
    update(T: any): Observable<User> {
        throw new Error("Method not implemented.");
    }

    remove(T: any): Observable<User> {
        throw new Error("Method not implemented.");
    }

}