import { Component, OnInit,Input } from '@angular/core';
import { post } from 'src/app/Model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post ?: post;
  constructor() { }

  ngOnInit(): void {
  }

}
