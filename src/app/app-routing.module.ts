import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GitHubFollowersComponent } from './components/git-hub-followers/git-hub-followers.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent },
  { path: 'followers', component: GitHubFollowersComponent },
  { path: 'followers:id', component: GitHubFollowersComponent },
  { path: 'followers:login', component: GitHubFollowersComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
