import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router/src/interfaces";
import { Observable } from "rxjs/Observable";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Injectable()
export class AdminGuard implements CanLoad{
    constructor(private users: UsersService, private router: Router){

    }

    canLoad(): Observable<boolean>{
        return this.users.currentUser.first()
        .map( currentUser => {
            if(!currentUser){
                this.router.navigateByUrl('auth');
            }
            return !!currentUser;
        });
    }
}