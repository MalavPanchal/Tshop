import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor( private afAuth: AuthService) {


   }

  ngOnInit() {
  }

  login(){
this.afAuth.login();

  }

}
