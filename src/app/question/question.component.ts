import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { questionnUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private service : ApiService
  ){}

  ngOnInit(): void {
      this.getAllQuestion();
  }
  questions :any;
  getAllQuestion(){
    this.service.get(questionnUrl+ '/getallquestion')
    .subscribe(res => {
      this.questions = res;
      console.log(this.questions);
    })
  }
}
