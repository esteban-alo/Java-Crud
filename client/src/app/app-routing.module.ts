import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUsersComponent } from './views/show-users/show-users.component';

const routes: Routes = [
  {path: 'list', component: ShowUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
