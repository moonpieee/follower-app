import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() isLiked;
  @Input("likesCount") likesCount:number;



  constructor() { }

  ngOnInit() {

  }

  onClickLike(){
    this.likesCount += (this.isLiked)? -1 : 1;
    this.isLiked = !this.isLiked;
  }

}
