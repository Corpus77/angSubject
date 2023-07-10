import { Component, OnInit } from '@angular/core';
import { BusService } from './services/bus.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subject';
  comp1: string = 'default';
  comp2: string = 'default';
  
  constructor(private readonly busService: BusService){}
  ngOnInit(): void {
    this.busService.text$.subscribe((value) => {
      this.comp1 = value;
    })
    this.busService.text2$.subscribe(
      (value) => {
        this.comp2 = value;
      } 
    )
  }
}
