import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actionLogin } from 'app/auth/store/action/login.action';
import { actionRegister } from 'app/auth/store/action/register.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private store:Store){}
  registerForm: FormGroup
  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required])
      }
    )
  }
  sendForm(){
    this.store.dispatch(actionRegister({pams:this.registerForm.value}))
  }
}
