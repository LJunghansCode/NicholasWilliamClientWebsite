import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit  {
  constructor() { }
  ngOnInit() {
    document.body.style.backgroundColor = '#0e0e0e';
  }
}
