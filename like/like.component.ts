import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {
  @Input() isActive!: boolean;
  @Input() likesCount!: number;

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1; 
  }

}
