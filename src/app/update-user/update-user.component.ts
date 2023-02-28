import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { userUrl } from '../Models/baseUrl';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private service:ApiService,
    private router:Router
  ){}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id']
      console.log(this.id)
      this.getUser()
  }
  id!:number;
  user=new UserModel();
  data!:any;
  getUser(){
    this.service.get(userUrl+'/getuserbyId/'+this.id)
    .subscribe(res=>{
      this.data=res
      this.user=this.data
      console.log(this.user)
    })
  }
  update(){
    this.service.put(userUrl+'/updateuser',this.user)
    .subscribe(res=>{
      console.log(res)
        this.router.navigate(['user'])
      }
      )
  }
  
  
}
