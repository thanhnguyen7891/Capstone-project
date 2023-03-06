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
  headers:any=null

  getHeader(token:string){
    this.login=true
    this.headers= new HttpHeaders({
      'Authorization':'Bearer '+token
    })
  }
  post(url:string,data: any){
    return this.http.post(url, data,{headers:this.headers})
  }
  get(url:string){
    return this.http.get(url,{headers:this.headers})
  
  }
  put(url:string, data:any){
    return this.http.put(url,data,{headers:this.headers})
  }
  delete(url:string){
    return this.http.delete(url,{headers:this.headers})
  }
  getToken(loginusername:string, loginpassword:string, type:string){
    let data:any={username:loginusername,password:loginpassword}
    this.username = loginusername;
    this.type = type;
    return this.http.post('http://localhost:8080/authenticate',data,{responseType:'text'})
    
  }
}
