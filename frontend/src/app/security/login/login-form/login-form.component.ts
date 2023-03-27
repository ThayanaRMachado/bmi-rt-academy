import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class UserLogin {
  name?: string;
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: UserLogin = new UserLogin();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}
