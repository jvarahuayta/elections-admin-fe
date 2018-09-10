import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UsersService } from "../services/users.service";
import { ToastUtil } from "../utils/toast.util";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user";
import { SplashUtil } from "../utils/splash.service";

@Injectable()
export class RoleBasedGuard implements CanActivate, CanLoad{    

    constructor(private users:UsersService, private router: Router, private toast: ToastUtil,
    private auth: AuthService, private splash: SplashUtil){

    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
        return this.validate( route.data );
    }
    canLoad(route: Route): Observable<boolean>{
        return this.validate( route.data );
    }

    private validate(routeData: any): Observable<boolean>{
        const { roleGuard } = routeData;
        if(!roleGuard){
            return Observable.of(true);
        }
        const role = roleGuard.roles[0];
        const { redirectTo, purgeSessionOnFail, showSplashOnValid } = roleGuard;
        return this.users.currentUser.first()
        .flatMap<User,any>( currentUser => {
            var tastksToAwait = [];
            var isValid = currentUser && currentUser.roles.includes( role );
            tastksToAwait.push( Observable.of(isValid) )
            if(!isValid && purgeSessionOnFail){
                tastksToAwait.push( this.auth.logout() );
            }            
            return Observable.forkJoin(
                ...tastksToAwait
            );
        }).map( results => {
            var isValid = results[0];
            if(!isValid){
                this.toast.error("You can't access there!");
                if( redirectTo ){
                    this.router.navigateByUrl( redirectTo );
                }
            }else{
                if( showSplashOnValid ){
                    this.splash.showSplash();
                }
            }
            return isValid;
        });
    }
}