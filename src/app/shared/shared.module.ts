import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatRippleModule, MatProgressBarModule, MatTableModule } from '@angular/material';
import { RoleBasedContentComponent } from './components/role-based-content/role-based-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoleBasedContentComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatProgressBarModule,
    MatTableModule,
    RoleBasedContentComponent
  ]
})
export class SharedModule { }
