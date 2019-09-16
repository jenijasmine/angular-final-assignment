import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})

export class LoginService {


  temp = "HEllo"

  URL ='http://localhost:3000/users'
  constructor(private http: HttpClient) { }


  loginuser(name,password) {
   return this.http.get(this.URL,httpOptions)
  }
    
}
