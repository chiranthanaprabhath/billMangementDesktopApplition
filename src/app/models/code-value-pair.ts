export class CodeValuePair {
  public code : string = '';
  public value : string = '';

  constructor(code?:string,value?:string) {
    if(code && value){
      this.code = code;
      this.value = value;
    }
  }

}
