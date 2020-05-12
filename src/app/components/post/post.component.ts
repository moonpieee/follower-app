import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/common/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts:any
  
  constructor(private postSVC: PostService) { }

  ngOnInit() {
    this.postSVC.getPosts().subscribe((res)=>{
      this.posts = res;
    },(err)=>{
      console.log(err);
    });

  }


  createPost(input:HTMLInputElement,api:string,){
    let newPost = { 'title' : input.value }
    input.value = '';
    this.postSVC.createPost(JSON.stringify(newPost)).subscribe((res:any)=>{
      newPost['id'] = res.id;
      this.posts.splice(0,0,newPost)
    },(err)=>{
      console.log(err);
    });
  }

  deletePost(id:number){
    this.postSVC.deletePost(id).subscribe(res=>{
      // this.getPosts(this.URI+api);
      console.log('post delete');
    })
  }

}
