import { Component, OnInit } from '@angular/core';
import { GithubfollowersService } from 'src/app/common/service/githubfollowers.service';
import { of, Observable } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.scss']
})
export class GitHubFollowersComponent implements OnInit {

  public URI:string = "https://api.github.com/users/octocat/followers";
  public myFollowersData:any;

  constructor(private myGitHubProfileSVC:GithubfollowersService) { }

  ngOnInit() {
    this.getMyFollower().subscribe((res)=>{
        this.myFollowersData =  res;
      },(err: HttpErrorResponse)=>{
        console.table(err);
      });
  }

  getMyFollower():Observable<any>{
    return of(this.myGitHubProfileSVC.getGitHubFollower(this.URI));
  }

}
