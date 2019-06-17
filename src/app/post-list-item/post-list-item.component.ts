import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  updateLikes(value: string) {
    switch (value) {
      case 'add':
        this.post.loveIts++;
        break;
      case 'remove':
        this.post.loveIts--;
        break;
    }
  }
}
