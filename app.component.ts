import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [1,2,3];
  viewMode = 'list';
  subjects =[
    {id:1, name: 'subject1'},
    {id:2, name: 'subject2'},
    {id:3, name: 'subject3'},
    {id:4, name: 'subject4'},
    {id:5, name: 'subject5'},

  ]

  onAdd(){
    this.subjects.push({id: 6, name: 'subject6'});
  }

  onRemove(subject: any){
    let index = this.subjects.indexOf(subject);
    this.subjects.splice(index,1);
  }

  onUpdate(subject : any){
    subject.name = 'english';
  }


  post = {
   title: "Title",
   isFavorite: false
  }

  tweet={
    isActive: false,
    isLiked: 10
  }

  ngOnInit(): void {
    console.log('APP COMPONENT');
   // console.log(this.post);
  }

}
