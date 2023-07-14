import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusService } from './services/bus.service';
import { interval, map, take, filter, debounceTime } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'subject';
  comp1: string = 'default';
  comp2: string = 'default';
  arrValue: any = [];
  coordX: number
  constructor(public busService: BusService) { }

  ngOnInit(): void {
    //
    const el = document.querySelector('.cont');
    const eventMouse = this.busService.eventBus(el, 'mousemove');
    const eventMouseSuscribe = eventMouse.pipe(debounceTime(50))
      .subscribe(evt => {
        //console.log(evt.offsetX);
        this.coordX = evt.clientX
      })

    //
    console.log(eventMouseSuscribe);
    
    this.busService.text$.pipe(map(val => val.toUpperCase())).subscribe((value) => {
      this.comp1 = value;
      this.arrValue.push(value);
      // console.log(this.busService.text$.asObservable());
    })
    this.busService.text2$.subscribe(
      (value) => {
        this.comp2 = value;
        this.arrValue.push(value);
      }
    )


  }
  ngOnDestroy(): void {
    this.busService.text$.unsubscribe()
    this.busService.text2$.unsubscribe()
    //this.eventMouseSuscribe.unsubscribe()
  }
}




