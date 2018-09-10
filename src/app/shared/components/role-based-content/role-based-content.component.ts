import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-role-based-content',
  templateUrl: './role-based-content.component.html',
  styleUrls: ['./role-based-content.component.scss']
})
export class RoleBasedContentComponent implements OnInit {

  mustBeRender = false;
  @Input('role') role: string;

  constructor(private users: UsersService) {
  }

  ngOnInit() {
    this.users.currentUser.subscribe( currentUser => {
      if(currentUser && currentUser.roles.includes(this.role)){
        this.mustBeRender = true;
      }
    });
  }

}
