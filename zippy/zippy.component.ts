import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
  @Input('title') title!: string;
  isExpanded!: boolean;

  constructor() { }

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }

}
