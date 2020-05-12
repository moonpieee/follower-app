
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPanelComponent } from './components/my-panel/my-panel.component';
import { LikeComponent } from './components/like/like.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './common/service/post.service';
import { HomeComponent } from './components/home/home.component';
import { GitHubFollowersComponent } from './components/git-hub-followers/git-hub-followers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPanelComponent,
    LikeComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostComponent,
    HomeComponent,
    GitHubFollowersComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
