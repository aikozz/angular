import { Component, Input, OnInit } from '@angular/core';
import CardModel from 'src/app/model/card.model';
import {Router} from "@angular/router";
import {ArticlesService} from "../../service/ArticlesService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() CardModel!:CardModel;
  article!: CardModel;
  constructor(private articleService: ArticlesService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onViewArticle() {
    this.router.navigateByUrl(`card/${this.CardModel.id}`);

    }
   
}
