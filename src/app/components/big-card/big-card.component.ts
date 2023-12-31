import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass'],
})
export class BigCardComponent implements OnInit {
  @Input()
  Id: string = '';
  @Input()
  pictureCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
