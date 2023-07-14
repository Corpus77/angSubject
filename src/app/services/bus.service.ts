import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { fromEvent } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BusService {
  //mouseMove$ = fromEvent<MouseEvent>(el, 'mousemove');
  public eventObs$: Observable<Event>
  public text$ = new Subject<string>();
  public text2$ = new Subject<string>();
  public send(text: string) {
    this.text$.next(text);
    //console.log(this.text$);
  }
  public eventBus(element: any, eventType: string) {
    return this.eventObs$ = fromEvent<any>(element, eventType)
  }
  public send2(text: string) {
    this.text2$.next(text);
    //console.log(this.text$);
  }
  constructor() { }
}
