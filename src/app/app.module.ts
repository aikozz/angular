import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './compenants/nav-component/nav-component.component';
import { ArticlesrondsComponent } from './compenants/articlesronds/articlesronds.component';
import { Articles3quartComponent } from './compenants/articles3quart/articles3quart.component';
import { FooterComponentComponent } from './compenants/footer-component/footer-component.component';
import { ArticleslisteComponentComponent } from './compenants/articlesliste-component/articlesliste-component.component';
import { HeaderComponentComponent } from './compenants/header-component/header-component.component';
import { TestDataComponent } from './compenants/test-data/test-data.component';
import { IndexComponent } from './compenants/index/index.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import { SecondComponent } from './components/second/second.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ArticlesrondsComponent,
    Articles3quartComponent,
    FooterComponentComponent,
    ArticleslisteComponentComponent,
    HeaderComponentComponent,
    TestDataComponent,
    IndexComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
