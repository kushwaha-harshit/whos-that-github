import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FollowersService } from './services/followers.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './Errors/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepoComponent } from './repositories/repo/repo.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    ListItemComponent,
    NavbarComponent,
    ProfileComponent,
    RepositoriesComponent,
    RepoComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FollowersService,
    { provide: ErrorHandler, useClass:AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
