import { Component, OnInit } from '@angular/core';
import { SplashUtil } from '../core/utils/splash.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private splash: SplashUtil){

  }

  ngOnInit(){
    this.splash.hideSplash();
  }

}
