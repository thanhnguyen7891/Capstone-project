import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { answerUrl } from '../Models/baseUrl';

@Component({
  selector: 'app-pending-answer',
  templateUrl: './pending-answer.component.html',
  styleUrls: ['./pending-answer.component.css']
})
export class PendingAnswerComponent implements OnInit {
  currentDate = new Date();
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.pendingAnswer();
  }
  
  answers: any;
  pendingAnswer(){
    this.service.get(answerUrl+ '/getallanswers')
    .subscribe(res =>{
      this.answers = res;
    })
  }

  approved(answer: any){
    answer.status = 'approved';
    answer.approved_by = this.service.username;
    this.service.put(answerUrl+ '/updateanswer',answer)
    .subscribe(res =>{
      this.router.navigate(['answer']);
      console.log(res)
    })
  }
  declined(id: any){
    this.service.delete(answerUrl+'/deleteanswerbyid/'+id)
    .subscribe(res =>{
      this.pendingAnswer()
    })

  }
}
