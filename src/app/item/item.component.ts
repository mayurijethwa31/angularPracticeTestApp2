import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input('hobby') element: {type:string,name:string,content:string};
@Input() public parentData;
@Output() public childEvent = new EventEmitter();
fireEvent(){
  this.childEvent.emit("emit the child class event")
}
name="mayuri";
hobbies:string[]=["cooking","cricket","volleyball"];
isAvailable = true;
classAttr = "success";
hasError = false;
hasNoError = false;
messageError = {
  "success":this.hasError,
  "danger":this.hasError
}
textStyles={
  color:"blue",
  fontStyle:"italic"
}
onClick(val){
  console.log(val + "hey on click event generated!!!");
}
  constructor() { }

  ngOnInit() {
  }

}
