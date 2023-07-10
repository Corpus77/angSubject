import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  text2: string = '';
  received: string = '';
  constructor(private readonly busService: BusService) {}
  ngOnInit(): void {
    this.busService.text$.subscribe((value) => {
      console.log(value);
      this.received = value;
    });
  }
  public sendHandler2(): void {
    this.busService.send2(this.text2);
  }
}
