import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "home", component: HomeComponent
},{
  path: "cards", component: CardsComponent
},{
  path: "blog", component: BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
