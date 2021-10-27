import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  message:string=""//making a blank property
  onAddCart(event:any){
  this.message=event.target.value+" Added in cart !" //here on clicking the "add to cart" this message comes !!!
  }//with the help of event binding we can show messages to the user once they click / scroll / point etc etc ...
  onInputClick(event: any){
    console.log(event.target.value);
  }
  getInputInfo(inputInfo: any)
  {
    console.log(inputInfo.value);//extracts info from "<input #inputInfo type="text" value="TESS" name="Bhavey">"
    console.log(inputInfo.name);//extracts info from "<input #inputInfo type="text" value="TESS" name="Bhavey">"

  }
}
