import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  @Input() content = '😄';

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  handleBtnClick() {
    this.btnClicked.emit(true);
  }

}
