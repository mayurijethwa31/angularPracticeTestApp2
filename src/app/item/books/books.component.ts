import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
book ={
  author: "sidney Sheldon",
  id: 13
}
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.book = {
      author:this.route.snapshot.params['author'],
      id: this.route.snapshot.params['id']
    };
    this.route.params.subscribe(
      (params:Params) =>  {
        this.book.id = params['id'];
        this.book.author = params['author'];
      }
    )

  }

}
