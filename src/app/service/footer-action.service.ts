import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CodeValuePair} from "../models/code-value-pair";

@Injectable()
export class FooterActionService {

  private actionNameSource = new BehaviorSubject('default action');
  currentActionName = this.actionNameSource.asObservable();

  private actionBtnSource = new BehaviorSubject(new CodeValuePair());
  currentBtn = this.actionBtnSource.asObservable();
  constructor() { }

  changeActionName(actionName: string) {
    this.actionNameSource.next(actionName)
  }
  changeBtnStatus(btnStatus: CodeValuePair){
    this.actionBtnSource.next(btnStatus)
  }

}
