import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articlesronds',
  templateUrl: './articlesronds.component.html',
  styleUrls: ['./articlesronds.component.css']
})
export class ArticlesrondsComponent implements OnInit {
  elementsArticles=[1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
