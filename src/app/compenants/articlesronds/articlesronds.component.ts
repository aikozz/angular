import { Component, OnInit, Input } from '@angular/core'; 
import CardModel from  '../../model/card.model';
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../../service/ArticlesService";

@Component({
  selector: 'app-articlesronds',
  templateUrl: './articlesronds.component.html',
  styleUrls: ['./articlesronds.component.css']
})
export class ArticlesrondsComponent implements OnInit {
  article !:  CardModel[];
  constructor(private articleService: ArticlesService,
  ) { }
  
  ngOnInit(): void {
    this.article = this.articleService.getAllArticles();
  }

}
