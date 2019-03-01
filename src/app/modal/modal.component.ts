import { Component, OnInit } from '@angular/core';
import {ModalService} from '@ea/ea-ui';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public readonly MODAL1_ID = 'modal1';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  handleClick() {
    this.modalService.open(this.MODAL1_ID);
  }

}
