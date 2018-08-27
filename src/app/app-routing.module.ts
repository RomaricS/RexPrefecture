import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaComponent } from './idea/idea.component';
import { SubmitComponent } from './submit/submit.component';
import { RexDetailComponent } from './rex-detail/rex-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'rex', component: RexDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'idea', component: IdeaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
