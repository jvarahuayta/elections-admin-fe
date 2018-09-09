import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSummaryComponent } from './admin-summary.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSummaryComponent,
    children: [
      {
        path: '',
        component: CandidateListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSummaryRoutingModule { }
