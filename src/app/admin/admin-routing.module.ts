import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleBasedGuard } from '../core/guards/role-based.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/summary'
      },
      {
        path: 'summary',
        loadChildren: 'app/admin-summary/admin-summary.module#AdminSummaryModule',
        canLoad: [
          RoleBasedGuard
        ],
        data: {
          roles: ['admin']
        }
      },
      {
        path: 'votes',
        loadChildren: 'app/admin-votes/admin-votes.module#AdminVotesModule',
        canLoad: [
          RoleBasedGuard
        ],
        data: {
          roles: ['director']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
