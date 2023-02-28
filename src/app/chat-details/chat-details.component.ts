import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { chatUrl } from '../Models/baseUrl';
import { ChatModel } from '../Models/chat.model';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ApiService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.username =this.service.username;
    this.receiver = this.route.snapshot.params['receiver'];
  }
  chat: any = new ChatModel();
  username: any;
  receiver: any;
  
  addChat(){
    this.chat.fromUser = this.username;
    this.chat.toUser = this.receiver;
    this.chat.datetime = (new Date()).toDateString();
    this.service.post(chatUrl+ '/addmsg',this.chat)
    .subscribe(res =>{
      this.chat = res;
      console.log(this.chat)
      this.router.navigate(['/chat']);
    })
  }
}
