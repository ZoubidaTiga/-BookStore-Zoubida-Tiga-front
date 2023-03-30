import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BService {
  public host:string="http://localhost:8080/api/books"
  constructor(private http:HttpClient) { }


  public getBooks(){
      return this.http.get(this.host)
    }

  delete(id:number) {
    return this.http.delete(`${this.host}/${id}`)
  }
  create(book:any) {
    return this.http.post(this.host, book)
  }

  getbookById(id:number) {
    return this.http.get(`${this.host}/${id}`)
  }
  
  updatebook(book:any){
    return this.http.put(this.host, book)
  }

  searchBookByTitleAndCategories(search:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("categories",search.categories).append("title",search.title);
    return this.http.get(this.host+"/titlesAndCategories", {params:queryParams})
  }
  searchBookByAuthor(search:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("author",search.author);
    return this.http.get(this.host+"/author", {params:queryParams})
  }
}
