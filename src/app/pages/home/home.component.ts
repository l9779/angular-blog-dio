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
  previousPosts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setMainPost();
    this.setOtherPosts();
    this.setPreviousPosts();
  }

  setMainPost(): void {
    this.MainPost = dataFake[0];
  }

  setOtherPosts(): void {
    const [p1, p2, p3, p4] = dataFake;
    this.otherPosts = [p2, p3, p4];
  }

  setPreviousPosts(): void {
    this.previousPosts = dataFake.filter(
      (post) => !this.otherPosts.includes(post) && post.id !== '1'
    );
  }
}
