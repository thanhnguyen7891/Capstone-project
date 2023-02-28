import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { chatUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ApiService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.receiver=this.route.snapshot.params['receiver'];
    this.username=this.service.username;
    this.getOutgoingMessage();
    this.getIncomingMessage();
  }
  receiver!: string;
  outgoing: any=[];
  incoming: any=[];
  username!: string;

  getOutgoingMessage(){
    this.service.get(chatUrl + '/getmessagesbyuser/'+this.username+'/'+this.receiver)
    .subscribe(res =>{
      this.outgoing = res;
      console.log(this.outgoing);
    })
  }

getIncomingMessage(){
  this.service.get(chatUrl + '/getmessagesbyuser/'+this.receiver+'/'+this.username)
    .subscribe(res =>{
      this.incoming = res;
      console.log(this.outgoing);
    })
}

}
