import { Component, OnInit } from '@angular/core';
import { CookieService } from './Cookie.service';
import {Routes, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   public splashToggle: boolean;
   constructor(public cookieService: CookieService, public router: Router) {}
   ngOnInit() {
     if (this.cookieService.checkCookie('splashDisabled').value === false) {
         this.cookieService.addCookie('splashDisabled', 'true' );
         this.cookieService.update();
         this.splashToggle = true;
     }else {
        this.splashToggle = false;
     }
   }

}

