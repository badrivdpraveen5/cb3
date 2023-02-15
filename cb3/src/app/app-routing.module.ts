import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ChangePwdComponent } from './admin/change-pwd/change-pwd.component';
import { ExamComponent } from './admin/exam/exam.component';
import { FacDetailsComponent } from './admin/fac-details/fac-details.component';
import { FacRegComponent } from './admin/fac-reg/fac-reg.component';
import { MarksUpdateComponent } from './admin/marks-update/marks-update.component';
import { MarksViewComponent } from './admin/marks-view/marks-view.component';
import { StuDetailsComponent } from './admin/stu-details/stu-details.component';
import { StuRegComponent } from './admin/stu-reg/stu-reg.component';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyhomeComponent } from './faculty/facultyhome/facultyhome.component';
import { HomeComponent } from './navbar/home/home.component';
import { LoginComponent } from './navbar/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';

const routes: Routes = [
  {path:'',redirectTo:'nav',pathMatch:'full'},
  {path:'nav',component:NavbarComponent,children:[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:AdminhomeComponent},
    {path:'student-registration',component:StuRegComponent},
    {path:'faculty-registration',component:FacRegComponent},
    {path:'exam',component:ExamComponent},
    {path:'student-details',component:StuDetailsComponent},
    {path:'faculty-details',component:FacDetailsComponent},
    {path:'marks-update',component:MarksUpdateComponent},
    {path:'marks-view',component:MarksViewComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'change-password',component:ChangePwdComponent},

  ]},
  {path:'faculty',component:FacultyComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:FacultyhomeComponent},
    {path:'marks-update',component:MarksUpdateComponent},
    {path:'marks-view',component:MarksViewComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'change-password',component:ChangePwdComponent},
  ]},
  {path:'student',component:StudentComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:StudenthomeComponent},
    {path:'marks-view',component:MarksViewComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'change-password',component:ChangePwdComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
