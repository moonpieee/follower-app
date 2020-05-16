import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubfollowersService extends PostService {
  public URI:string = "https://api.github.com/users/octocat/followers";

  constructor(http:HttpClient) { 
    super(http);
  }


  // getFollowers(){
  //  return this.getGitHubFollower(this.URI);
  // }
  

  
}
