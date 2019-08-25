import { Component } from '@angular/core';
import{ TestServiceService }from './test-service.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies = [{type:"home",name:"cooking",content:"cook food"}];
  title = 'myApp';
 public messageCommunication = "i m parent";
 public message = "";
 constructor(private svc:TestServiceService ,private router:Router, private route: ActivatedRoute){
  svc.printHello("service works");
 }

 loadCrud(){
  //some actions performed
  this.router.navigate(['/crud'],{relativeTo:this.route});
}
}
