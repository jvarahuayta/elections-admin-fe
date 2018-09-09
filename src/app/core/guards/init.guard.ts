import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";

@Injectable()
export class InitGuard implements CanActivate{
    constructor(private auth: AuthService){

    }

    canActivate(): Observable<boolean>{
        return Observable.of(true);
    }
}