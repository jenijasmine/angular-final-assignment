import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata = []

  showFirstComponent = false

  constructor(private ls: LoginService) { }

  ngOnInit() {

  }
  loginuser(name, password) {
    this.ls.loginuser(name, password)
      .subscribe(
        userdata => {
          console.log(userdata);

          for (let i in userdata) {
            console.log(userdata[i]);

            if (userdata[i].username === name && userdata[i].password === password) {
              console.log("Hi");
              this.showFirstComponent = true
              return
            }


          }

          alert("Incorrect username & password");

        }
      );
  }
}

