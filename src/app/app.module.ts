import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//!
import { FormsModule } from '@angular/forms';
//!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { NewPipe } from './pipes/new.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    NewPipe
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    //!
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
