import { Component } from "@angular/core";
import { CourseService } from "./course.service";


@Component({
    selector: 'courses',
    template: `
        <ul>
        <li *ngFor = "let course of courses"> {{course}} </li>
        </ul>
        <input type="text" [(ngModel)]="title" (keyup.enter)="onKeyUp()"/>
        <br>
        {{title | titleCase}}
       
        `
})
export class CourseComponent{
    title!: string;
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    constructor(service:CourseService){
        this.courses = service.getCourses();
    }

    onKeyUp(){
        console.log(this.title);
    }

    
}