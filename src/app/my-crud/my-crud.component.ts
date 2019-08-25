import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-crud',
  templateUrl: './my-crud.component.html',
  styleUrls: ['./my-crud.component.css']
})
export class MyCrudComponent implements OnInit {
studentData = [
  {
    Sname:"jane",
    Sid:12
  },{
    Sname:"john",
    Sid:14
  },{
      Sname:"doe",
      Sid:18
  }]

  addData(name:string,id:number){
    this.studentData.push({Sname:name,Sid:id});
    console.log(this.studentData)
  }
  delete(ind){
    this.studentData.splice(ind, 1);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }


}
