import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { ToastUtil } from './utils/toast.util';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

import './extensions/date';

import { CandidatesService } from './services/candidates.service';
import { MatSnackBarModule } from '@angular/material';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { InitComponent } from './components/init/init.component';
import { InitGuard } from './guards/init.guard';
import { RouterModule } from '@angular/router';
import { SummaryService } from './services/summary.service';
import { VotesService } from './services/votes.service';
import { RoleBasedGuard } from './guards/role-based.guard';
import { SplashUtil } from './utils/splash.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      environment.firebase,
    ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    RouterModule
  ],
  declarations: [InitComponent],
  providers: [
    
    ToastUtil,
    SplashUtil,

    AuthGuard,
    AdminGuard,
    InitGuard,
    RoleBasedGuard,

    AuthService,
    CandidatesService,
    UsersService,
    SummaryService,
    VotesService

  ],
  exports: [
    InitComponent
  ]
})
export class CoreModule { }
