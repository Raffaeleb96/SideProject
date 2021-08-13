import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

titolo = 'Benvenuti su Alphashop'
saluti = 'Seleziona un prodotto'
  ngOnInit(): void {
  }

}
