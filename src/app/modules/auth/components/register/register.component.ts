import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { actionRegister } from '../../store/action/register.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private store:Store, private router: Router){}

  sendForm(){
    let userFormData = this.registerForm.value;
    this.store.dispatch(actionRegister({pams:userFormData}))
    localStorage.setItem("user", JSON.stringify(userFormData))
    this.router.navigate(["offers"])
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.email, Validators.required]),
        password: new FormControl("", [Validators.minLength(6), Validators.required])
      }
    )

    localStorage.removeItem("user")
  }
}
