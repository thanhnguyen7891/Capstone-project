import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { questionnUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-created-question',
  templateUrl: './created-question.component.html',
  styleUrls: ['./created-question.component.css']
})
export class CreatedQuestionComponent implements OnInit {
  currentDate = new Date();
  constructor(
    private router: Router,
    private service: ApiService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getAllQuestion();
  }
  createdQuestions:any;
  getAllQuestion(){
    this.service.get(questionnUrl+ '/getallquestion')
    .subscribe(res =>{
      this.createdQuestions = res;
      console.log(this.createdQuestions);
    })
  }
}
