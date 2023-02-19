import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actionLogin } from '../../store/action/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private store:Store){}
  loginForm: FormGroup
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required])
      }
    )
  }
  sendForm(){
    this.store.dispatch(actionLogin({pams:this.loginForm.value}))
  }
}
