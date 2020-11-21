import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.scss'],
})
export class ConfComponent implements OnInit {

  userForm: FormGroup;
  errorId: string;
  errorpassword: string;
  jsonData: any;
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.createForm();
    let name = "X";
    let grade = "X";
    let resultat = "X";
    let duplication = "X";
    let NbrParterners = "X";
    this.jsonData = {
      name: name,
      grade: grade,
      resultat: resultat,
      duplication: duplication,
      NbrParterners: NbrParterners
    }
    if (localStorage.getItem("name")) {
      name = localStorage.getItem("name");
      this.setname({target:{value:name}});
    }
    if (localStorage.getItem("grade")) {
      grade = localStorage.getItem("grade");
      this.setgrade({target:{value:grade}})
    }
    if (localStorage.getItem("resultat")) {
      resultat = localStorage.getItem("resultat");
      this.setresultat({target:{value:resultat}});
    }
    if (localStorage.getItem("duplication")) {
      duplication = localStorage.getItem("duplication");
      this.setduplication({target:{value:duplication}});
    }
    if (localStorage.getItem("NbrParterners")) {
      NbrParterners = localStorage.getItem("NbrParterners");
      this.setNbrParterners({target:{value:NbrParterners}});
    }
    if (name)
      this.jsonData.name = name;
    if (grade)
      this.jsonData.grade = grade;
    if (resultat)
      this.jsonData.resultat = resultat;
    if (duplication)
      this.jsonData.duplication = duplication;
    if (NbrParterners)
      this.jsonData.NbrParterners = NbrParterners;

    if (!name && !grade && !resultat && !duplication && !NbrParterners) {
      fetch('./assets/conf/configuration.json').then(res => res.json())
        .then(json => {
          this.jsonData = json;
        });
    }

  }
  Valider() {
    localStorage.setItem("name", this.userForm.controls['name'].value);
    localStorage.setItem("grade", this.userForm.controls['grade'].value);
    localStorage.setItem("resultat", this.userForm.controls['resultat'].value);
    localStorage.setItem("duplication", this.userForm.controls['duplication'].value);
    localStorage.setItem("NbrParterners", this.userForm.controls['NbrParterners'].value);
    this.router.navigateByUrl("/home");

  }
  setname(data) {
    this.userForm.controls['name'].setValue(data.target.value)

  }
  setgrade(data) {
    this.userForm.controls['grade'].setValue(data.target.value)
  }
  setresultat(data) {
    this.userForm.controls['resultat'].setValue(data.target.value)
  }
  setduplication(data) {
    this.userForm.controls['duplication'].setValue(data.target.value)
  }
  setNbrParterners(data) {
    this.userForm.controls['NbrParterners'].setValue(data.target.value)
  }

  goBack() {
    this.router.navigateByUrl("/home");
  }
  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      resultat: new FormControl('', Validators.required),
      duplication: new FormControl('', Validators.required),
      NbrParterners: new FormControl('', Validators.required)
    });

  }



}
