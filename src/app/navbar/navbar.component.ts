import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(
      private auth:AuthService,
      private router:Router
      ){
    }
    ngOnInit(): void {
    }
    get isAuth(){
      return this.auth.getAuth()
    }
  
   logout(){
   
   
    this.auth.logout()
    this.router.navigate(['login'])
   }
   
}
