import { Injectable } from '@angular/core';
import { UserModel } from './Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setToken(token:any){
    localStorage.setItem('token',token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  setAuth(auth:any){
    let a=JSON.stringify(auth)
    localStorage.setItem('auth',auth)
  }
  getAuth(){
   let a:any=localStorage.getItem('auth')
   let auth=JSON.parse(a)
   return auth
  }
  setUser(user:any){
    let u =JSON.stringify(user)
    localStorage.setItem('user',u)
  }
  getUser(){
     let u:any=localStorage.getItem('user')
    let user =JSON.parse(u)
    return user
  }
  logout(){
    localStorage.clear()
  }
  
}
