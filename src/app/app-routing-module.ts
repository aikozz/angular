import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./compenants/index/index.component";
import {SecondComponent} from "./components/second/second.component";
import {CardComponent} from "./compenants/card/card.component";
import { ArticlesrondsComponent } from './compenants/articlesronds/articlesronds.component';
import { SingleCardComponent } from './compenants/single-card/single-card.component';
const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'second', component: SecondComponent},
  {path: 'card/:id', component : SingleCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
