import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
  filteredArr = [];
 arr = [
   {Code:"12",Description:"cooking"},
   {Code:"13",Description:"playing"},
   {Code:"14",Description:"hockey"},
   {Code:"15",Description:"volleyball"},
   {Code:"16",Description:"swimming"},
   {Code:"17",Description:"gardening"},
   {Code:"18",Description:"basketball"}
]
hobbieArr = ["12","14"]
logg:any = [];
filterArr(arr,hobbieArr){
  let a;
  arr.forEach(element => {
      this.logg.push(a)
  })
  console.log("logg"+ this.logg);
}

  constructor() { 
    this.filterArr(this.arr,this.hobbieArr);
  }
 
  ngOnInit() {
  }

}
