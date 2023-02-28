import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { userUrl } from '../Models/baseUrl';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
     
  }
  user:UserModel=new UserModel();
  data: any;
  addUser(){
    this.service.post(userUrl+ '/adduser',this.user)
    .subscribe(res =>{
      console.log(res)
    })
  }
  test(){
    console.log(this.user)
  }
}
