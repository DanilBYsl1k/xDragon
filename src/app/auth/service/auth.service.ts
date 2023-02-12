import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iauth } from '../types/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htpp:HttpClient) { }
  login(dataForm:Iauth[]){
    return this.htpp.post<Iauth[]>('http://localhost:1488/login', dataForm)
  }
  register(dataForm:Iauth[]){
    return this.htpp.post<Iauth[]>('http://localhost:1488/register', dataForm)
  }
}
