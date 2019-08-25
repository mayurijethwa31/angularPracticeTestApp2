import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CrudComponent } from './crud/crud.component';
import { TestServiceService } from './test-service.service';
import {HttpClientModule} from '@angular/common/http';
import { MyCrudComponent } from './my-crud/my-crud.component';
import { LoopComponent } from './loop/loop.component';
import { BooksComponent } from './item/books/books.component'
import { EditBookComponent } from './item/edit-book/edit-book.component';
import { SqrtPipe } from './app.sqrt';
import { PractiseComponentComponent } from './practise-component/practise-component.component';

const appRoutes: Routes = [
  {path: "" , component: MyCrudComponent},
  {path: "item" , component: ItemComponent, children:[
    {path: ":id/:author" , component: BooksComponent},
  {path: ":id/edit" , component: EditBookComponent}]},
  {path: "crud" , component: CrudComponent},
  {path: "loop" , component: LoopComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CrudComponent,
    MyCrudComponent,
    LoopComponent,
    BooksComponent,
    EditBookComponent,
    SqrtPipe,
    PractiseComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
