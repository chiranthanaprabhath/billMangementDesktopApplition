
export class BillDetails {
  public originalBillNo : string = '';
  public duplicateBillNo : string = '';
  public metalType : string = '';
  public quantity : number = 0;
  public lorryNo : string = '';
  public price : number = 0;
  public discount : number = 0;
  public date : string = new Date().toLocaleString();

  constructor(billDetails? : BillDetails) {
    if(billDetails){
      this.originalBillNo = billDetails.originalBillNo;
      this.duplicateBillNo = billDetails.duplicateBillNo;
      this.metalType = billDetails.metalType;
      this.price=billDetails.price;
      this.lorryNo=billDetails.lorryNo;
      this.quantity=billDetails.quantity;
      this.date= billDetails.date;
      this.discount=billDetails.discount
    }
  }


}
