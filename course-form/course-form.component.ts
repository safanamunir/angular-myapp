import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent  {
  courseCategory = [
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'},
  ]

  log(x: any){
    console.log(x);
  }

  create(y: any){
    console.log( y.value);
  }


}
