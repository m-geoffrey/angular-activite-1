import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Activité 1 Angular - OpenClassRoom';

  posts = [
      new Post('titre premier post', 'contenu premier post', 1),
      new Post('titre deuxième post', 'contenu deuxième post', -1),
      new Post('titre troisième post', 'contenu troisième post', 0)
     ];
  }

  class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }
}
