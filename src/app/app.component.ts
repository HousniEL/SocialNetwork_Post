import { Component,OnInit } from '@angular/core';
import { post } from 'src/app/Model';
import { posts } from 'src/app/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poste';
   posts : post[] = posts;
}
