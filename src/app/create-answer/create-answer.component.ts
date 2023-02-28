import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { answerUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  currentDate = new Date();
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }
  answer:any={};
  data: any;
  createAnswer(){
    this.answer.status = 'pending';
    this.answer.created_by = this.service.username;
    this.service.post(answerUrl+ '/addanswer',this.answer)
    .subscribe(res =>{
      console.log(res)
    })
  }
  test(){
    console.log(this.answer)
  }
}
