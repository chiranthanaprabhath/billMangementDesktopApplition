import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {FormControl, FormGroup} from "@angular/forms";
import {BillDetails} from "../../../models/bill-details";

@Component({
  selector: 'app-view-bill-details',
  templateUrl: './view-bill-details.component.html',
  styleUrls: ['./view-bill-details.component.css']
})
export class ViewBillDetailsComponent implements AfterViewInit {

  @Input() footerBtnAction: string = "";
  @Input() billList: BillDetails[] = [];

  @Output() actionFinished = new EventEmitter<boolean>();

  displayedColumns: string[] = ['date', 'billNo', 'lorryNo', 'productType','discount','price','quantity'];
  dataSource = new MatTableDataSource<BillDetails>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor() {
  }
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
     // To Get Cookie
    let ELEMENT_DATA: BillDetails[] = this.billList;
    this.dataSource = new MatTableDataSource<BillDetails>(ELEMENT_DATA);

  }
}

