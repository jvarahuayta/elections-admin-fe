import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../core/models/user';
import { UsersService } from '../core/services/users.service';
import { SplashUtil } from '../core/utils/splash.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser: User;

  constructor(private auth: AuthService, private router: Router, private users: UsersService,
  private splash: SplashUtil) {
    this.users.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
    })
  }

  ngOnInit() {
    this.splash.hideSplash();
  }

  onLogoutClick(){
    this.auth.logout().subscribe(()=>{
      this.router.navigateByUrl('/auth');
    });
  }

}
