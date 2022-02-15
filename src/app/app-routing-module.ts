import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./compenants/index/index.component";
import {SecondComponent} from "./components/second/second.component";

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'second', component: SecondComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
