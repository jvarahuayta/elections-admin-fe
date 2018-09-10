import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { InitComponent } from './core/components/init/init.component';
import { InitGuard } from './core/guards/init.guard';
import { RoleBasedGuard } from './core/guards/role-based.guard';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    canActivate: [
      InitGuard
    ],
    children: [
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [
          AdminGuard,
          RoleBasedGuard
        ],
        data: {
          roles: ['admin']
        }
      },
      {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
        canLoad: [
          AuthGuard
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
