import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iauth } from '../types/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){ }
  baseUrl:string='http://localhost:1488'
  login(obj:Iauth){
    return this.http.post(`http://localhost:1488/login`,obj).pipe()
  }
  register(obj:Iauth){
    return this.http.post(`${this.baseUrl}/register`,obj).pipe()
  }
}
