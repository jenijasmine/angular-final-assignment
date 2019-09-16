import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:Http) { }

  getReviews(){
    return this.http.get("http://localhost:3000/posts")
    .toPromise()
    .then(response => response.json())
    .catch(error => console.log(error));
    
  }

  getBookReviews(name, reviews){

    

    let temp = []
    for (let i of reviews){
      if(i.name ===  name){
        temp.push(i)
      }
    }
    return temp;

    
  }


  addReview(obj){
    return this.http.post("http://localhost:3000/posts", obj)
    .toPromise()
    .then(response => response.json())
    .catch(error => console.log(error));
  }
}
