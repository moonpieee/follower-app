import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public URI:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(this.URI);
  }

  createPost(data:any):Observable<any>{
    return this.http.post(this.URI,data);
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete(this.URI +'/'+id);
    
    // .catch((error:HttpErrorResponse)=>{
    //   if(error.status=== 400){
    //     console.log("display error");
    //   }
    // })
  }

}
