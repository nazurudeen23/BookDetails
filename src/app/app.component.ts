import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Details';

  bookList: {isbn: string,title: string,description: string, author: string, price: number,url: any}[] = 
  [
    // {
    //   isbn: '5860-92-049-0', 
    //   title: 'Programming for Beginners: Learn the fundamentals of programming with Java', 
    //   description: 'Java programming, taking you through the Java syntax and the fundamentals of object-oriented programming. About This Book • Learn the basics of Java programming in a step-by-step manner.',
    //   author: 'Mark Lassoff',
    //   price: 329,
    //   url: ''
    // },
    // {
    //   isbn: '7856-123-58-0', 
    //   title: 'JavaScript: Fast-track your web development career using the powerful features of advanced JavaScript', 
    //   description: '  Develop your JavaScript programming skills by learning strategies and techniques commonly used in modern full-stack application development Key Features • Write and deploy full-stack applications efficiently with JavaScript',
    //   author: 'Philip Kirkbride',
    //   price: 227,
    //   url: ''

    // }
  ];

  onBookAdded(book: {isbn: string,title: string,description: string, author: string, price: number})
  {
    this.bookList.push({isbn:book.isbn, title:book.title, description:book.description, author:book.author, price:book.price,url:''});
    localStorage.setItem('books',JSON.stringify(this.bookList));
  }

}
