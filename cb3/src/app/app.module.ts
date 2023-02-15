import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { LoginComponent } from './navbar/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { StuRegComponent } from './admin/stu-reg/stu-reg.component';
import { FacRegComponent } from './admin/fac-reg/fac-reg.component';
import { ExamComponent } from './admin/exam/exam.component';
import { StuDetailsComponent } from './admin/stu-details/stu-details.component';
import { FacDetailsComponent } from './admin/fac-details/fac-details.component';
import { MarksUpdateComponent } from './admin/marks-update/marks-update.component';
import { MarksViewComponent } from './admin/marks-view/marks-view.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { ChangePwdComponent } from './admin/change-pwd/change-pwd.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { FacultyhomeComponent } from './faculty/facultyhome/facultyhome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    FacultyComponent,
    StudentComponent,
    LoginnavComponent,
    StuRegComponent,
    FacRegComponent,
    ExamComponent,
    StuDetailsComponent,
    FacDetailsComponent,
    MarksUpdateComponent,
    MarksViewComponent,
    ViewProfileComponent,
    ChangePwdComponent,
    AdminhomeComponent,
    StudenthomeComponent,
    FacultyhomeComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
