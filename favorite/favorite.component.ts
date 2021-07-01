import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent  {
  @Input() isFavorite!: boolean;


  onClick(){
    console.log('clicked', this.isFavorite, !this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
    if(this.isFavorite)
    console.log("1");
    else
    console.log("0");
  }

}
