import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() Titolo: string
  @Input() SottoTitolo: string

   
  constructor() { 
    this.Titolo = '';
    this.SottoTitolo = '';

  }



  ngOnInit(): void {
    console.log(this.Titolo);
  }

}
