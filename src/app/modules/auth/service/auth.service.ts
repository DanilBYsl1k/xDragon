import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../types/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  login(dataForm:IAuth[]){
    return this.http.post<IAuth[]>('http://localhost:1488/login', dataForm)
  }
  register(dataForm:IAuth[]){
    return this.http.post<IAuth[]>('http://localhost:1488/register', dataForm)
  }
}
