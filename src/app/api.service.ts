import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private auth:AuthService) { }
  login:boolean=false
  username: string=''
  type: string=''

  getHeader(){
   
    return new HttpHeaders({
      'Authorization':'Bearer '+this.auth.getToken()
    })
  }
  post(url:string,data: any){
    return this.http.post(url, data,{headers:this.getHeader()})
  }
  get(url:string){
    return this.http.get(url,{headers:this.getHeader()})
  
  }
  put(url:string, data:any){
    return this.http.put(url,data,{headers:this.getHeader()})
  }
  delete(url:string){
    return this.http.delete(url,{headers:this.getHeader()})
  }
  getToken(loginusername:string, loginpassword:string){
    let data:any={username:loginusername,password:loginpassword}
    this.username = loginusername;
    return this.http.post('http://localhost:8080/authenticate',data,{responseType:'text'})
    
  }
}
