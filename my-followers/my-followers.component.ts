import { Component, OnInit } from '@angular/core';
import { MyFollowersService } from '../services/my-followers.service';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.scss']
})
export class MyFollowersComponent implements OnInit {
  followers!: any;

  constructor(private service: MyFollowersService) { }

  ngOnInit(): void {
    this.service.getFollowers()
    .subscribe(
      response =>{
        console.log('get followers from server',response);
        this.followers = response;
      },);
  }

}
