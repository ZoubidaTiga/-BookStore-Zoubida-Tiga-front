import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BService } from '../service/service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  book:any;
  id:number=0;
  
  constructor(private router: Router, private route:ActivatedRoute, private service:BService){
    this.route.params.subscribe(res=>this.service.getbookById(res['id'])
    .subscribe(data=>{
      this.book=data;
      this.id=this.book.id;
    })
  );
    
  }
  
  updateBook(data:any){
    data.id=this.book.id
    console.log(data);
    this.service.updatebook(this.book).subscribe((data)=>console.warn(data))
    this.router.navigateByUrl('');
  }


}
