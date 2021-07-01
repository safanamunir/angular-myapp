import { Component, OnInit, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__ } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
posts: any;

  constructor(private service: PostService) {
    
  }

  ngOnInit(){
    this.service.getPosts() 
    .subscribe(
      response => {
      this.posts = response;
    }, 
      error => {
      alert('An unexpected error has occured.');
      console.log(error);
    });

  }

  createPost(input: HTMLInputElement){
    let post : any = { title: input.value};
    input.value = '';
    
    this.service.createPost(post)
    .subscribe(
      response =>{
      post.id = response ;
      this.posts.splice(0, 0, post); //0 starting postion
      console.log(response);          //0 delete object
    }, 
      error =>{
      alert('An unexpected error has occured.');
      console.log(error);
    });                               //add post object at index 0 or google splice
  }

  deletePost(post: HTMLInputElement){
    this.service.deletePost(post.id)
    .subscribe(
      response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      console.log(post.id);
    },
      (error: Response)=> { 
        if(error.status === 404){
          alert('This post has already been deleted.');
        }
        else{
          alert('An unexpected error has occured.');
          console.log(error);
        }
    });

  }

}
