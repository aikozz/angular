import { Component, Input, OnInit } from '@angular/core';
import CardModel from 'src/app/model/card.model';
import { ArticlesService } from 'src/app/service/ArticlesService';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() id!:number;
  constructor(private articleService: ArticlesService,private route:ActivatedRoute) { }
  CardModel!:CardModel
  
  ngOnInit(): void {
    const articleId = this.route.snapshot.params['id'];

    this.CardModel =  this.articleService.getArticlesById(articleId)

  }

}
