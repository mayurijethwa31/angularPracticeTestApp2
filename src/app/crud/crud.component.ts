import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
public Employee=[];
public errormsg;
    addData(name:string,id:number){
      this.Employee.push({Ename:name,Eid:id});
    }
    delete(index){
      this.Employee.splice(index,1);
      console.log(this.Employee)
    }
  constructor(private svc:TestServiceService) { 
  }

  ngOnInit() {
    // this.Employee = this.svc.getData();
    this.svc.getData()
    .subscribe(data => this.Employee = data,
      error => this.errormsg = error
      )
  }

}
