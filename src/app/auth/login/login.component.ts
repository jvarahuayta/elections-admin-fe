import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastUtil } from '../../core/utils/toast.service';
import { CandidatesService } from '../../core/services/candidates.service';
import { UsersService } from '../../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginFG: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private toast: ToastUtil,
  private candidates: CandidatesService, private users: UsersService, private router: Router) { 
    this.loginFG = this.fb.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  onLoginSubmit(){
    if(!this.loginFG.valid){
      this.toast.error('Invalid form');
      return;
    }
    this.auth.login(
      this.loginFG.value.email,
      this.loginFG.value.password
    ).subscribe( couldLogin => {
      if(couldLogin){
        this.toast.success('Successful login','Login');
        this.router.navigateByUrl('/admin');
      }else{
        this.toast.error('Bad credentials','Login');
      }
    });
  }
}
