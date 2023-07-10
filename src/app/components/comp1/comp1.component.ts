import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private readonly busService: BusService) {}
  text1: string = '';
  received: string = '';
  ngOnInit(): void {
    this.busService.text2$.subscribe(
      (value) => {
        console.log(value);
        this.received = value;
      },
    );
  }
  public sendHandler(): void {
    this.busService.send(this.text1);
  }
}
