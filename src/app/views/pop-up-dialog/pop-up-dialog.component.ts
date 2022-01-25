import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImagePath} from "../../models/constant";

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.css']
})
export class PopUpDialogComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() msgTitle: string = '';
  @Input() msgContent: string = '';
  @Input() imagePopUp: string = '';

  @Output() activeEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  closeModel(){
    this.active = false;
    this.activeEmit.emit(false);
  }
}
