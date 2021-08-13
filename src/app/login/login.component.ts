import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = 'raffo'
  password = '123'
  autenticato = true
  consentito : boolean = false
  errorMsg = 'Nome utente o password errati!'
  infoMsg = 'Accesso consentito'
  
  constructor() { }
  
  ngOnInit(): void {
  }

  gestAut(){
    if(this.userid === 'raffo' && this.password === '123'){
      this.autenticato = true;
      this.consentito = true ;    }
    else 
    this.autenticato= false
    this.consentito = false
  }
 
}
