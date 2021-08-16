import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDisplayComponent } from './display-book/display-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path:'home',
   component:BookDisplayComponent
 },
 {
  path:'dashboard',
  component:AddBookComponent
},
{
  path:'about',
  component:AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
