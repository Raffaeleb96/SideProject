import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = 'raffo'
  password = '123'
  //autenticato = true
  consentito = false
  locked = false
  errorMsg = 'Nome utente o password errati!'
  infoMsg = 'Accesso non consentito'
  
  constructor(private route : Router) { 

  }
  
  ngOnInit(): void {
  }

  gestAut(){
    if(this.userid === 'raffo' && this.password === '123'){
      //this.autenticato = true;
      this.route.navigate(['Welcome', this.userid]);
      this.consentito = true ; 
    
    }
    else 
    //this.autenticato= false
    this.consentito = false
    this.locked = true;
  }
 
}
