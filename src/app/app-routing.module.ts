import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
    { path: 'user/:username/profile', component: ProfileComponent },
    { path: 'user/:username/followers', component: ListComponent },
    { path: 'user/:username/repositories', component: RepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
