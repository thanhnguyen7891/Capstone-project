import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { questionnUrl } from '../Models/baseUrl';
import { QuestionModel } from '../Models/question.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.getQuestion();
  }
  question: QuestionModel=new QuestionModel();

  getQuestion(){
    this.question.status='pending'
    this.question.created_by = this.service.username;
    this.service.post(questionnUrl+ '/addquestion', this.question)
    .subscribe(res =>{
    
      console.log(res)
    })
  }

  
}
