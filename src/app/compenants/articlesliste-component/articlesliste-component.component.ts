import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articlesliste-component',
  templateUrl: './articlesliste-component.component.html',
  styleUrls: ['./articlesliste-component.component.css']
})
export class ArticleslisteComponentComponent implements OnInit {
  elements=[1,2,3];
  elementsListe=[1,2,3,4,5,6,7,,8,9,10,11];
  constructor() { }

  ngOnInit(): void {
   
    let test1={height:'10em'}
  }

}
