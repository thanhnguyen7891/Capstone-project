import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnswerComponent } from './answer/answer.component';
import { PendingQuestionComponent } from './pending-question/pending-question.component';
import { PendingAnswerComponent } from './pending-answer/pending-answer.component';
import { SearchComponent } from './search/search.component';
import { CreatedQuestionComponent } from './created-question/created-question.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    CreateQuestionComponent,
    UpdateUserComponent,
    QuestionComponent,
    NavbarComponent,
    AnswerComponent,
    PendingQuestionComponent,
    PendingAnswerComponent,
    SearchComponent,
    CreatedQuestionComponent,
    CreateAnswerComponent,
    AddUserComponent,
    HomeComponent,
    ChatComponent,
    ChatDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
