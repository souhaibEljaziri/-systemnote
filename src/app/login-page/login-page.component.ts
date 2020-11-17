import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  id:string;
  password:string;
  user:any={}
  constructor(private  router:  Router) { }

  ngOnInit() {}
  login(user){
  //   if(user)
  // if(user.id=="revoltteam"&&user.password=="wavesschool")
  // {
   this.router.navigateByUrl("/home");
  }
  // }
}
