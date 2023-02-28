import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { userUrl } from '../Models/baseUrl';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: UserModel = new UserModel();
  user_type = ['Admin', 'User'];
  constructor(
    private router: Router,
    private service: ApiService,
  ){ }

  ngOnInit(): void {
      
  }
  saveUser(){
    this.service.post(userUrl+ '/addnewuser', this.user)
    .subscribe(res =>{
      console.log(res);
      this.goLogin();
    })
  }
  goLogin(){
    this.router.navigate(['/login']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
