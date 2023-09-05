import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

type Post = {
  id: string;
  picture: string;
  title: string;
  subtitle: string;
  description: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  MainPost: Post = {
    id: '',
    picture: '',
    title: '',
    subtitle: '',
    description: '',
  };
  otherPosts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setMainPost();
    this.setOtherPosts();
  }

  setMainPost(): void {
    this.MainPost = dataFake[0];
  }
  setOtherPosts(): void {
    this.otherPosts = dataFake.filter((post) => post.id !== '1');
  }
}
