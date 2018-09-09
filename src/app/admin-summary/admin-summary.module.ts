import { NgModule } from '@angular/core';

import { AdminSummaryRoutingModule } from './admin-summary-routing.module';
import { AdminSummaryComponent } from './admin-summary.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminSummaryRoutingModule
  ],
  declarations: [AdminSummaryComponent, CandidateListComponent]
})
export class AdminSummaryModule { }
