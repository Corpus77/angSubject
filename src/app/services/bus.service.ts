import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BusService {
  public text$ = new Subject<string>();
  public text2$ = new Subject<string>();
  public send(text: string) {
    this.text$.next(text);
    //console.log(this.text$);
  }
  public send2(text: string) {
    this.text2$.next(text);
    //console.log(this.text$);
  }
  constructor() {}
}
