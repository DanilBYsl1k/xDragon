import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private authService:AuthService){}
  formLogin:FormGroup
  ngOnInit(): void {
    this.formLogin=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }
  sendForm(){
    this.authService.login(this.formLogin.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
