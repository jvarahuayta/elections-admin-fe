import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class ToastUtil{

    constructor( private toastDesignProvider: MatSnackBar ){
        
    }

    show(message: string, title?: string){
        this.toastDesignProvider.open(message,undefined,
            { verticalPosition: 'bottom', horizontalPosition: 'center', duration: 3000 })
    }

    info(message: string, title?: string){
        this.toastDesignProvider.open(message,'INFO',
            { verticalPosition: 'bottom', horizontalPosition: 'center', duration: 3000 })
    }

    success(message: string, title?: string){
        this.toastDesignProvider.open(message,'SUCCESS',
        { verticalPosition: 'bottom', horizontalPosition: 'center', duration: 3000 })
    }

    warning(message: string, title?: string){
        this.toastDesignProvider.open(message,'WARNING',
        { verticalPosition: 'bottom', horizontalPosition: 'center', duration: 3000 })
    }

    error(message: string, title?: string){
        this.toastDesignProvider.open(message,'ERROR',
        { verticalPosition: 'bottom', horizontalPosition: 'center', duration: 3000 })
    }

}