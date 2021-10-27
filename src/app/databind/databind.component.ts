import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynName:string=" TESS ! "

  myMethod()
  {
    return "My application is good ! as its made by"+  this.dynName
  }
  enable:boolean=false
  appStatus:boolean=true;
  status1="Online";
  status2="Offline";
}
