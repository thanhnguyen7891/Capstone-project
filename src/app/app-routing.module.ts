import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { QuestionComponent } from './question/question.component';
import { PendingQuestionComponent } from './pending-question/pending-question.component';
import { PendingAnswerComponent } from './pending-answer/pending-answer.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SearchComponent} from './search/search.component';
import { CreatedQuestionComponent } from './created-question/created-question.component';
import { AnswerComponent } from './answer/answer.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'user', component: DashboardComponent},
  { path: 'updateUser/:id', component: UpdateUserComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'create-question', component: CreateQuestionComponent},
  { path: 'pending-question', component: PendingQuestionComponent},
  { path: 'pending-answer', component: PendingAnswerComponent},
  { path: 'search', component: SearchComponent},
  { path: 'created-question', component: CreatedQuestionComponent},
  { path: 'answer', component: AnswerComponent},
  { path: 'create-answer', component: CreateAnswerComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'chat-details/:receiver', component: ChatDetailsComponent},
  { path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
