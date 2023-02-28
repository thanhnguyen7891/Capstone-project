import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { questionnUrl } from '../Models/baseUrl';
import { QuestionModel } from '../Models/question.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private router : Router,
    private service: ApiService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
   
  }

  question:any={};
  data!: any;
  getQuestionById(){
    this.service.get(questionnUrl + '/getquestionbyid/'+this.question.id)
    .subscribe(res =>{
      this.question = res;
    })
  }
  getQuestionByTopic(){
    this.service.get(questionnUrl+ '/getQuestionbytopic/'+this.question.topic)
    .subscribe(res =>{
      this.data = res;
    
    
    })
  }
}
