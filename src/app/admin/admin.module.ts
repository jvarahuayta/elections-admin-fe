import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
