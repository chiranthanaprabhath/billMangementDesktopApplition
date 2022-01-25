import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BillDetails} from "../../../models/bill-details";
import {CommonDetails, CommonMsg, FooterBtnName, ImagePath} from "../../../models/constant";
import {FooterActionService} from "../../../service/footer-action.service";
import {CodeValuePair} from "../../../models/code-value-pair";


@Component({
  selector: 'app-add-bill-details',
  templateUrl: './add-bill-details.component.html',
  styleUrls: ['./add-bill-details.component.css']
})

export class AddBillDetailsComponent implements OnInit,OnChanges {

  @Output() actionFinished = new EventEmitter<boolean>();
  @Output() billAddedEmit = new EventEmitter<BillDetails[]>();
  commonMsg = new CommonMsg();
  imagePath = new ImagePath();
  footerBtnName = new FooterBtnName();
  showPopUpDialog : boolean = false;
  isLoading:boolean = false;
  msgTitle:string = 'SUCCESS';
  msgContent:string = this.commonMsg.successBill;
  imagePopUp:string = this.imagePath.SUCCESS;
  isNewBillState : boolean = true;
  isBillSending : boolean = true;
  currentBill : BillDetails = new BillDetails();
  billList:BillDetails[] = [];
  commonDetails : CommonDetails = new CommonDetails();
  currentBillIndex : number = 0;
  isLastBillIndex : boolean =false;
  //////
  lorryNoValidator = new FormControl('')
  metalTypeValidator = new FormControl('');
  priceValidator = new FormControl('');
  discountValidator = new FormControl('');
  quantityValidator = new FormControl('');
  dateValidator = new FormControl('')

  //////
  constructor(private footerActionService:FooterActionService) {
  }

  ngOnInit(): void {
    this.loadBillList();
    this.createNewBill();
    this.setFieldValidators();
    this.footerActionService.currentActionName.subscribe(actionName => {
      this.footerBtnActionHandler(actionName);
    })

  }
  ngOnChanges(changes: SimpleChanges): void{

  }
  createNewBill(){


    this.isNewBillState = true
    this.currentBillIndex = 0;
    this.currentBill.originalBillNo = (parseInt(this.billList[this.billList.length-1].originalBillNo)+5).toString();
    this.currentBill.duplicateBillNo = (parseInt(this.billList[this.billList.length-1].duplicateBillNo)+5).toString();
    this.currentBill.lorryNo = 'fg';
    this.currentBill.metalType='';
    this.currentBill.price = 0;
    this.currentBill.discount = 0;
    this.currentBill.quantity = 0;
    this.setFieldValidators();
    this.footerActionService.changeBtnStatus(new CodeValuePair(this.currentBillIndex.toString(),this.billList.length.toString()))

  }

  setFieldValidators(){
    this.lorryNoValidator = new FormControl({
        value: !this.isNewBillState?this.currentBill.lorryNo:null,
        disabled: !this.isNewBillState
      },
      [
        Validators.required,
      ]);
    this.metalTypeValidator = new FormControl({
        value: !this.isNewBillState?this.currentBill.metalType:null,
        disabled: !this.isNewBillState
      },
      [
        Validators.required,
      ]);
    this.priceValidator = new FormControl({
        value: !this.isNewBillState?this.currentBill.price:null,
        disabled: !this.isNewBillState
      },
      [
        Validators.required,
      ]);
    this.quantityValidator = new FormControl({
        value: !this.isNewBillState?this.currentBill.quantity:null,
        disabled: !this.isNewBillState
      },
      [
        Validators.required,
      ]);
    this.discountValidator = new FormControl({
        value: this.currentBill.discount,
        disabled: !this.isNewBillState
      },
      [
        Validators.required,
      ]);
    this.dateValidator = new FormControl({
        value: new Date(),
        disabled: true
      },
      [
        Validators.required,
      ]);
  }

  changeMetalType(event: Event){
    this.currentBill.metalType = event.type;
  }
  onClickAddBill(){
    this.lorryNoValidator.markAsTouched();
    this.metalTypeValidator.markAsTouched();
    this.priceValidator.markAsTouched();
    this.discountValidator.markAsTouched();
    this.quantityValidator.markAsTouched();
    if(this.lorryNoValidator.valid && this.metalTypeValidator.valid
      && this.priceValidator.valid && this.discountValidator.valid
      && this.quantityValidator.valid){
      this.showPopUpDialog = true;
      this.isLoading = true;
      this.delay(3000);

    }
  }
  loadBillList(){
    this.currentBill.duplicateBillNo = '231786';
    this.currentBill.originalBillNo = '124123';
    let createdBill = new BillDetails();
    createdBill.duplicateBillNo = '231781';
    createdBill.originalBillNo = '124117';
    createdBill.lorryNo = "sdcvs";
    createdBill.price = 99;
    createdBill.discount = 33;
    createdBill.metalType = '6-9';
    createdBill.quantity = 23;
    this.billList.push(createdBill)
    this.billAddedEmit.emit(this.billList);

  }

  closePopUp(event: boolean){
    this.showPopUpDialog = event;
  }
  goToNextBill(){
    this.isLastBillIndex = false;
    if(this.currentBillIndex>1){
      this.currentBillIndex = this.currentBillIndex - 1;
      this.currentBill = new BillDetails(this.billList[this.billList.length-this.currentBillIndex]);
      this.setFieldValidators();
    }
    this.footerActionService.changeBtnStatus(new CodeValuePair(this.currentBillIndex.toString(),this.billList.length.toString()))

  }
  goToPreviousBill(){
    this.isNewBillState = false;
    if(this.billList.length>this.currentBillIndex){
      this.currentBillIndex = this.currentBillIndex + 1;
      this.currentBill = new BillDetails(this.billList[this.billList.length-this.currentBillIndex ]);
      this.setFieldValidators();

    }else{
      this.isLastBillIndex = true;
    }
    this.footerActionService.changeBtnStatus(new CodeValuePair(this.currentBillIndex.toString(),this.billList.length.toString()))

  }
  footerBtnActionHandler(action : string){
    if(this.footerBtnName.goNext === action){
      this.goToNextBill();
      this.actionFinished.emit(true);
    }else if(this.footerBtnName.previous === action){
      this.goToPreviousBill();
      this.actionFinished.emit(true);
    }else if(this.footerBtnName.newBill == action){
      this.createNewBill();
      this.actionFinished.emit(true);
    }
  }
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=> {
      this.isLoading = false;
      let createdBill = new BillDetails();
      createdBill.originalBillNo = this.currentBill.originalBillNo;
      createdBill.duplicateBillNo = this.currentBill.duplicateBillNo;
      createdBill.lorryNo = this.lorryNoValidator.value;
      createdBill.metalType = this.metalTypeValidator.value;
      createdBill.price = this.priceValidator.value;
      createdBill.discount = this.discountValidator.value;
      createdBill.quantity = this.quantityValidator.value;
      this.billList.push(createdBill);
      this.billAddedEmit.emit(this.billList);
      this.createNewBill();
    });
  }
}
