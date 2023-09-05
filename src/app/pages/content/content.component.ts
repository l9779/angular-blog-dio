import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent implements OnInit {
  @Input()
  pictureCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent();
  }

  setValuesToComponent() {
    const result = dataFake.filter((article) => article.id === this.id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.pictureCover = result.picture;
  }
}
