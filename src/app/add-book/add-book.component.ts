  
import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent{
  viewMode='';

  Author ='';
  Price = '';
  Description ='';
  Title ='';
  Isbn='';  



  @Output() book: any = new EventEmitter<{isbn: string,title: string,describtion: string, author: string, price: number}>();


  constructor() {}


  onAddBook(isbn: any, title: string, description: string, author: string, price: any)
  {
    this.Author='';
    this.Price='';
    this.Description='';
    this.Title='';
    this.Isbn='';

    this.book.emit({isbn,title,description,author,price});
  }

}
