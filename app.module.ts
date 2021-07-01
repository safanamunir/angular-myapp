import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { CoursesComponent } from './courses/courses.component';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    InputFormatDirective,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    CourseService,
    AuthorsService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
