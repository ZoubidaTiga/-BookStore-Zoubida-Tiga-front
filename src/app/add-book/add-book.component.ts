import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BService } from '../service/service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private router: Router, private service:BService) {
  }

  createBook(data:any){
    console.warn(data)
     this.service.create(data).subscribe((data)=>console.warn(data))
     this.router.navigateByUrl('');
  }
}
