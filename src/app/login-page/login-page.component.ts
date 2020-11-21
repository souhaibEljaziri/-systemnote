import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  userForm: FormGroup;
  errorId: string;
  errorpassword: string;
  constructor(private router: Router) {

  }

  ngOnInit() { this.createForm(); }
  login() {
    if (this.userForm.value)
      if (this.userForm.controls['id'].value == "revoltteam" && this.userForm.controls['password'].value == "wavesschool") {
        this.router.navigateByUrl("/home");
      }
      else {
        if (this.userForm.controls['id'].value != "revoltteam") {
          this.errorId = "id";
        }
        if (this.userForm.controls['password'].value != "wavesschool") {
          this.errorpassword = "password";
        }
      }
  }
  clickItem() {
    localStorage.setItem("url", "https://wavesteampro.blogspot.com/");
    this.router.navigateByUrl("/guest/Guest");
  }
  setid(data) {
    this.userForm.controls['id'].setValue(data.target.value)
  }
  setpassword(data) {
    this.userForm.controls['password'].setValue(data.target.value)
  }
  createForm() {
    this.userForm = new FormGroup({
      id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }
}
