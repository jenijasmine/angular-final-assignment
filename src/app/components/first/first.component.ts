import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input()
  bookName
  @Input()
  review
  @Input()
  rating

  allReviews = []
  bookReviews = []

  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.getReviews()
    .then(response => {this.allReviews = response;console.log(response);
       
    })
    .catch(error => console.log(error))

  }

  getReview(){
    let temp = this.service.getBookReviews(this.bookName, this.allReviews)
    console.log(temp);
  
    this.bookReviews = JSON.parse(JSON.stringify(temp))
    console.log(this.bookReviews);
  }


  addReview(){

     
  this.service.addReview(
    {
      name:this.bookName,
      review:this.review,
      rating:this.rating
    }
  )
  .then( response => console.log(response))
  .catch(error => console.log(error)  )
  }
  

}
