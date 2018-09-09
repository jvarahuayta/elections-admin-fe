import { Injectable } from "@angular/core";
import { CanLoad } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad{
    constructor(private users: UsersService, private router: Router){

    }

    canLoad(): Observable<boolean>{
        return this.users.currentUser.first()
        .map( currentUser => {
            if(!!currentUser){
                this.router.navigateByUrl('admin');
            }
            return !currentUser;
        });
    }
    
}