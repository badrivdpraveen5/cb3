import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
 import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  formdata:any;
  constructor(private rt:Router) { }
  ngOnInit() {
    this.formdata=new FormGroup({
      usertype:new FormControl(""),
      username:new FormControl(""),
      password:new FormControl("")
    })
  }
  click(data:any){
    if(data.usertype=="admin" ){
      if(data.username=="praveen" && data.password=="admin"){
        alert("admin login successful");
        this.rt.navigate(['/admin']);
      }
      else{
        alert("incorrect  credentials");
        this.formdata.reset();
      }
      
    }
    else if(data.usertype=="faculty"){
      this.rt.navigate(["/faculty"]);
    }
    else if(data.usertype=="student"){
      this.rt.navigate(["/student"]);
    }

  }

}
