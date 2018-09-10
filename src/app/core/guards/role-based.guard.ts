import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UsersService } from "../services/users.service";

@Injectable()
export class RoleBasedGuard implements CanActivate, CanLoad{    

    constructor(private users:UsersService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
        return this.validate( route.data.roles[0] );
    }
    canLoad(route: Route): Observable<boolean>{
        return this.validate( route.data.roles[0] );
    }

    private validate(role: string): Observable<boolean>{
        return this.users.currentUser.first().map( currentUser => {
            var isValid = currentUser && currentUser.roles.includes( role );
            if(!isValid){
                this.router.navigateByUrl('/');
            }
            return isValid;
        });
    }
}