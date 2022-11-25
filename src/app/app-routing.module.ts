import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { ModifierComponent } from './modifier/modifier.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'liste', component: ListeComponent },
  { path: 'ajouter', component: AddComponent },
  { path: 'modifier/:id', component: ModifierComponent },
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
