import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminVotesComponent } from './admin-votes.component';
import { VoteListComponent } from './vote-list/vote-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminVotesComponent,
    children: [
      {
        path: '',
        component: VoteListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminVotesRoutingModule { }
