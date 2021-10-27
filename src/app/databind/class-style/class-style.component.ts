import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mypro:boolean=true;
mltclasses={
  class1:true ,//this means 'class1' is aplicable here
  class2:true,
  class3:true    ,
}
mltStyle={ 'background':'red',
'border':'10px solid green'
  }
}
