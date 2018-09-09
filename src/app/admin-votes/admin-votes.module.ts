import { NgModule } from '@angular/core';

import { AdminVotesRoutingModule } from './admin-votes-routing.module';
import { AdminVotesComponent } from './admin-votes.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminVotesRoutingModule
  ],
  declarations: [AdminVotesComponent, VoteListComponent]
})
export class AdminVotesModule { }
