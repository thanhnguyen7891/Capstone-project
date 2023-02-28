import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { chatUrl, userUrl } from '../Models/baseUrl';
import { ChatModel } from '../Models/chat.model';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ApiService
  ){}

  ngOnInit(): void {
      this.getUsers();
      this.getChat()

  }
  chat: any;
  users:UserModel[]=[]
  getUsers(){
    this.service.get(userUrl+'/getallusers')
    .subscribe(res=>{
      let data:any=res
      this.users=data
    })
  }
  addChat(){
    this.service.post(chatUrl+ '/addmsg',this.chat)
    .subscribe(res =>{
      this.chat = res;
      console.log(this.chat)
    })
  }
  getChat(){
    this.service.get(chatUrl+'/getallmsg')
    .subscribe(res =>{
      this.chat = res;
    })
  }
  deleteChat(id: any){
    this.service.delete(chatUrl+'/deletechatbyid/'+id)
    .subscribe(res =>{
      this.getChat();
    })
  }
  goChatDetails(receiver:string){
    this.router.navigate(['/chat-details',receiver]);
  }

  chatMessages(receiver:string){
    this.router.navigate(['message',receiver]);
  }
}
