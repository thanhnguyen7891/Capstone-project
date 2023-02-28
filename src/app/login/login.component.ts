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
    private auth: AuthService,
    private service: ApiService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
  }
  user: UserModel = new UserModel();


  testToken(){
    this.service.getToken(this.user.username, this.user.password)
    .subscribe(res=>{
      console.log(res)
      this.auth.setToken(res)
      this.auth.setAuth(true)
      this.router.navigate(['chat'])
    })
  }
}
