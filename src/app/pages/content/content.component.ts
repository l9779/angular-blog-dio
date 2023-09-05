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
  pictureCover: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.F00dCf4bXxX0J-qEEf4qIQHaD6%26pid%3DApi&f=1&ipt=1e27c5590de694b655fc437798a72fd8f3a2230ff0676ab3d2feeb6df971eb1d&ipo=images';
  @Input()
  contentTitle: string = 'titulo';
  @Input()
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo nam possimus quasi voluptates commodi libero sint, numquam, molestias, vitae soluta dicta? Et velit vel corrupti veritatis, ullam cum ex.';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.desciption;
    this.pictureCover = result.picture;
  }
}
