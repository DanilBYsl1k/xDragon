import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private authService:AuthService){}
  formRegister:FormGroup
  ngOnInit(): void {
    this.formRegister=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required])
    })
  }
  sendForm(){
    this.authService.register(this.formRegister.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
