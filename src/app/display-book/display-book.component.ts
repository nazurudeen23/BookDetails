
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class BookDisplayComponent implements OnInit {

  desc:any;
  img:any;

  url:any;
  msg='';

  id: number = 0;

  @Input() bookList: any;

  @Output() book: any = new EventEmitter<{id:number, url: any,describtion: string, price: number}>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

 

  openDialog(){
    this.dialog.open(AboutComponent);
  }

 
}