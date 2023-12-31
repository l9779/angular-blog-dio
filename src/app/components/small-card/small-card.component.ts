import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  Id: string = '0';
  @Input()
  pictureCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
