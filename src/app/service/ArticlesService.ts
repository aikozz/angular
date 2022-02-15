import { Injectable } from '@angular/core';
import CardModel from "../model/card.model";
import json from '../articles.json';
import { JsonPipe } from '@angular/common';
@Injectable({
 providedIn: 'root'
})
export class ArticlesService {
    
    cards:CardModel[]=[
        { "id": 1, "name": "Rammy", "src":"assets/img/cdd7b151a0194f1347987e1ff20eb833.jpg","alt":"test01","descriptif":"descriptif01","titre": "" },
        { "id": 2, "name": "JohnnY", "src":"assets/img/138f5a3b9947db26bab0b53e7c805e5e.jpg","alt":"test02","descriptif":"descriptif02","titre": ""},
        { "id": 3, "name": "FrAnnY", "src":"assets/img/0cfb6b2f66c221a70e534c1dd863b883.jpg","alt":"","descriptif":"descriptif03","titre": ""},
        { "id": 4, "name": "PAnnY", "src":"assets/img/f89d4cd288113b11fd9925c01bcd5c65.jpg","alt":"","descriptif":"descriptif03","titre": ""},
        { "id": 5, "name": "CarnnY", "src":"assets/img/fba2c20765a3c9426acd4912aad4ee8a.jpg","alt":"","descriptif":"descriptif03","titre": ""},
        { "id": 6, "name": "FrAttY", "src":"assets/img/fe4b4915437ed8dc3c5290b1dec725bf.jpg","alt":"","descriptif":"descriptif03","titre": ""},
    
    ]

    getAllArticles(): CardModel[] {
        return this.cards;
       }
    getArticlesById(articleId: number): CardModel {
        console.log(typeof  articleId);
        const article = this.cards.find(article =>
        article.id == articleId);
        if (!article) {
            throw new Error('article not found!');
        } else {
            console.log(typeof article.id)

            return article;
        }
    }
}