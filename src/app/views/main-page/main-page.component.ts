import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CodeValuePair} from "../../models/code-value-pair";
import {FooterSelection} from "../../models/constant";
import {FooterActionService} from "../../service/footer-action.service";
import {BillDetails} from "../../models/bill-details";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,private data: FooterActionService) { }
  footerSelection = new FooterSelection();
  footerSelectionName : string = this.footerSelection.newBill;
  actionName : string ="";
  billList : BillDetails[] = [];
  ngOnInit(): void {
  }
  footerBtnClick(event : CodeValuePair){
    if(this.footerSelection.newBill == event.code){
      this.footerSelectionName = this.footerSelection.viewBill;
    }else if(this.footerSelection.viewBill == event.code){
      this.footerSelectionName = this.footerSelection.newBill;
    }else if(event.code === ""){
      this.data.changeActionName(event.value)
    }
  }
  billAdded(billList : BillDetails[]){
    this.billList = billList;
  }
}
