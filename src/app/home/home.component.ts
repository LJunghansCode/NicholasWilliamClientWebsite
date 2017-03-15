import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public hide: boolean;
  public adminLoginToggle: boolean;
  constructor() { }
  toggleLoginBox() {
    if (this.adminLoginToggle === false) {
          this.adminLoginToggle = true;
    }else {
          this.adminLoginToggle = false;
    }
  }
}
