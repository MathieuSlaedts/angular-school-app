import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  modalId: String

  @Input()
  triggerBtnType: String

  @Input()
  triggerBtnLabel: string

  @Input()
  modalTitle: string

  @Input()
  modalMessage: string

  @Input()
  modalBtnLabel: String

  @Output()
  modalBtnClickedEvent = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  onModalBtnClicked(): void {
    this.modalBtnClickedEvent.emit(true)
    this.hide()
  }

  hide() {
    
  }

}
