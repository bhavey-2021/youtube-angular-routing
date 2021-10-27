import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedProduct: string | undefined;
  getProductVal(val:any)
  {
  console.log(val.target.value);//this gives the opetion selected in the console
  this.selectedProduct=val.target.value;//this will print the selected item frm the drop box
}
}
