import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  LoginUser()
  {
    if(this.username=="admin" && this.password=="admin123")
     console.log("hi");
  }

}
