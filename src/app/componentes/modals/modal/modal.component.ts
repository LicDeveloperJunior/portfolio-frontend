import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Input() titulo?:string;
  modale: NgbModal;
  show = false;
  constructor(private modal: NgbModal) {
    this.modale = modal;
  }

  ngOnInit(): void {
  }

  public toggleModal() {
    this.show = !this.show;
  }
}
