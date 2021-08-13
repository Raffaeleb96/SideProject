import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

titolo = 'Benvenuti su Alphashop'
saluti = 'Seleziona un prodotto'
utente = ''

ngOnInit(): void {
this.utente  = this.route.snapshot.params.userid
}


}
