import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { questionnUrl } from '../Models/baseUrl';
import { QuestionModel } from '../Models/question.model';

@Component({
  selector: 'app-pending-question',
  templateUrl: './pending-question.component.html',
  styleUrls: ['./pending-question.component.css']
})
export class PendingQuestionComponent implements OnInit {
  currentDate = new Date();
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.pendingQuestion();
  }
  
  questions: any;
  pendingQuestion(){
    this.service.get(questionnUrl+ '/getallquestion')
    .subscribe(res =>{
      this.questions = res;
    })
  }
  approved(question: any){
    question.status = 'approved';
    question.approved_by = this.service.username;
    this.service.put(questionnUrl+ '/updatequestion', question)
    .subscribe(res =>{
      console.log(res)
      this.router.navigate(['question']);
    })
  }

  declined(id: any){
    this.service.delete(questionnUrl+'/deletequestionbyid/'+id)
    .subscribe(res =>{
      this.pendingQuestion();
    })

  }
}
