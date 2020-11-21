import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  jsonData: { name: string; grade: string; resultat: string; duplication: string; NbrParterners: string; };

  constructor(private router: Router) { }
  navBar = [{
    name: "Name Liste",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/name-liste.html",
    url: '/folder/Name Liste'
  }, {
    name: "Prospection",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/prospection.html",
    url: '/folder/Prospection',
  }, {
    name: "Story Telling",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/story-telling.html",
    url: '/folder/Story Telling',
  }, {
    name: "Inviting",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/inviting.html",
    url: '/folder/Inviting',
  }, {
    name: "Presentation",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/presentation.html",
    url: '/folder/Presentation',
  }, {
    name: "Follow Up",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/follow-up.html",
    url: '/folder/Follow Up',
  }, {
    name: "Handling Objection",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/handling-objection.html",
    url: '/folder/Handling Objection',
  }, {
    name: "Closing",
    iframeUrl: "https://systemnoteapp.blogspot.com/p/closing.html",
    url: '/folder/Closing',
  }]
  path: string;
  public selectedIndex = 0;
  ngOnInit() {
    let name="X";
    let grade="X";
    let resultat="X";
    let duplication="X";
    let NbrParterners="X";
    this.jsonData={
      name:name,
      grade:grade,
      resultat:resultat,
      duplication:duplication,
      NbrParterners:NbrParterners
    }
    if(localStorage.getItem("name"))
    name= localStorage.getItem("name");
    if(localStorage.getItem("grade"))
    grade = localStorage.getItem("grade");
    if(localStorage.getItem("resultat"))
    resultat = localStorage.getItem("resultat");
    if(localStorage.getItem("duplication"))
    duplication =localStorage.getItem("duplication");
    if(localStorage.getItem("NbrParterners"))
    NbrParterners= localStorage.getItem("NbrParterners");
if(name)
this.jsonData.name = name;
if(grade)
this.jsonData.grade = grade;
if(resultat)
this.jsonData.resultat = resultat;
if(duplication)
this.jsonData.duplication = duplication;
if(NbrParterners)
this.jsonData.NbrParterners = NbrParterners;

if(!name&&!grade&&!resultat&&!duplication&&!NbrParterners)
{
  fetch('./assets/conf/configuration.json').then(res => res.json())
  .then(json => {
    this.jsonData = json;
  });
}
    const path = window.location.pathname.split('folder/')[1];
    this.path = window.location.pathname.split('folder/')[1];
    if (!this.path) {
      this.path = window.location.pathname.split('/h')[1];
    }
    if (path !== undefined) {
      this.selectedIndex = this.navBar.findIndex(page => page.name.toLowerCase() === path.toLowerCase());
    }
   
  }

  goToConf() {
    this.router.navigateByUrl("/config");
  }
  clickItem(item) {
    localStorage.setItem("url", item.iframeUrl)
  }

}
