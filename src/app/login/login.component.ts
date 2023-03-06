import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { userUrl } from '../Models/baseUrl';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_type = ['Admin', 'User'];

  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    this.service.headers = null;
    this.service.username = '';
    this.service.type = '';
    this.service.login = false;
//      this.userLogin();
  }
  user: UserModel = new UserModel();
  UserType: string = '';
  userLogin(){
    this.service.post(userUrl+ '/getLogin',this.user)
    .subscribe(res =>{
      console.log(res)
    })
  }
  onSubmit(){
    console.log(this.user);
    this.userLogin();
  }
  token:string='';
  testToken(){
    this.service.getToken(this.user.username, this.user.password, this.UserType)
    .subscribe(res=>{
      console.log(res)
      this.service.getHeader(res)
      this.loginToggle=true
      this.router.navigate(['chat'])
    })
  }
  signUp(){
    this.router.navigate(['signup'])
  }
  loginToggle:boolean=false
}
