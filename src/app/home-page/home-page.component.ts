import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(private  router:  Router) { }
 navBar=[{
name:"Name Liste",
url:""
 },{
  name:"Prospection",
  url:""
   },{
    name:"Story Telling",
    url:""
     },{
      name:"Inviting",
      url:""
       },{
        name:"Presentation",
        url:""
         },{
          name:"Follow Up",
          url:""
           },{
            name:"Handling Objection",
            url:""
             },{
              name:"Closing",
              url:""
               }]
  ngOnInit() {}
  login(form){
  
  }
}
