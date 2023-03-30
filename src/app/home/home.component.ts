import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BService } from '../service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  books:any;
  console = console;
  bookDisplay=new Book();
  constructor(private service:BService) { }
  
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.service.getBooks()
      .subscribe(data=>{
        this.books=data;
      },err => {
        console.log(err);
      })
  }

  onDelete(val:number){
    if (confirm('Are you sure you want to delete this book?')) {
      this.service.delete(val).subscribe(()=> {
        this.fetchData();
    });
    }
  }

  onDisplay(val:number){
    this.books.forEach((book:any) => {
        if(book.id===val){
          this.bookDisplay=book
        }
    });
  }

  searchBook(val:any){
  

    if(!val.author){
      this.service.searchBookByTitleAndCategories(val).subscribe(data=>{
        this.books=data;
      });
    }
    else{
      this.service.searchBookByAuthor(val).subscribe(data=>{
        this.books=data;
      });
    }
  }
    
  
  
}
