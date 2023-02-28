import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { chatUrl, userUrl } from '../Models/baseUrl';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class DashboardComponent implements OnInit {
 constructor(
    private router:Router,
    private service:ApiService
    ){}

  ngOnInit(): void {
    this.getAllUser()
  }
  users:any;
 getAllUser(){
    this.service.get(userUrl+'/getallusers')
    .subscribe(res=>{
      this.users=res;
      console.log(this.users)
    })
  }
  update(id:number){
    this.router.navigate(['/updateUser',id])
  }
  delete(id:number){
    console.log(id)
    this.service.delete(userUrl+'/deletebyid/'+id)
    .subscribe(res=>{
      console.log(res)
      this.getAllUser()
    })
  }
  goChat(id:number){
    this.router.navigate(['/addmsg',id])
    
  }
}
