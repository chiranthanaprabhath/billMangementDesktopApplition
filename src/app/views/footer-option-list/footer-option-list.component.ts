import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FooterBtnName, FooterSelection, ImagePath} from "../../models/constant";
import {CodeValuePair} from "../../models/code-value-pair";
import {FooterActionService} from "../../service/footer-action.service";

@Component({
  selector: 'app-footer-option-list',
  templateUrl: './footer-option-list.component.html',
  styleUrls: ['./footer-option-list.component.css']
})
export class FooterOptionListComponent implements OnInit {
  @Input() footerSelectionName:string = '';
  @Input() totalPrice : number = 20;
  @Input() totalQuantity : number = 23;

  @Output() btnNameEmit = new EventEmitter<CodeValuePair>()
  imagePath = new ImagePath();
  footerBtnName = new FooterBtnName();
  footerSelection = new FooterSelection();
  isNewBillState:boolean = true;
  isLastBillState:boolean = false;
  isNextBillHasState: boolean = false;
  constructor(private footerActionService:FooterActionService) { }

  ngOnInit(): void {
    this.footerActionService.currentBtn.subscribe(btnStatus => {
      this.btnVisibilityHandler(btnStatus);
    })
  }

  btnClick(btnName : string,isMainBtn?:boolean){
    let codeValuePair = new CodeValuePair()
    if(isMainBtn){
      codeValuePair.code = this.footerSelectionName;
    }else{
      codeValuePair.code = "";
    }
    codeValuePair.value = btnName;
    this.btnNameEmit.emit(codeValuePair)
  }
  btnVisibilityHandler(btnStatus:CodeValuePair){
    if(parseInt(btnStatus.code)>0){
      this.isNewBillState = false;
    }else{
      this.isNewBillState = true;
    }
    if(parseInt(btnStatus.code) === parseInt(btnStatus.value)){
      this.isLastBillState = true;
    }else{
      this.isLastBillState = false;
    }
    if(Math.abs(parseInt(btnStatus.code) - parseInt(btnStatus.value)) > 1){
      this.isNextBillHasState = true;
    }else{
      this.isNextBillHasState = false;
    }
  }
}
