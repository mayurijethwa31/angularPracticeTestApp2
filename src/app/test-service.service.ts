import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee'
import { Observable , throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private url:string="/assets/data/data";
  constructor(private http:HttpClient) {
   
  }
 
printHello(arg){
  console.log(arg);
}
getData():Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this.url)
                  .pipe(catchError(this.errorHandler))
}
errorHandler(error: HttpErrorResponse){
  return throwError(error.message || "server not done")
} 

 
}
