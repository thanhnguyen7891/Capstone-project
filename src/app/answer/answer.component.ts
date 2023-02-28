import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { answerUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  currentDate = new Date();
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.getAllAnswer();
  }
  answers: any;
  getAllAnswer(){
    this.service.get(answerUrl+ '/getallanswers')
    .subscribe(res =>{
      this.answers = res;
      console.log(this.answers);
    })
  }
  
}
