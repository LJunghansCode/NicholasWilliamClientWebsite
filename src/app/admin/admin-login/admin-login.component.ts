import { Component, OnInit } from '@angular/core';
import { AdminService } from './../Admin.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loggedIn: boolean;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminCheck((data) => {
      if (!data.password ) {
        this.redirectStore();
      } else {
        console.log(data);
      }
    });

  }

  adminCheck(callback) {
    this.adminService.checkAdmin()
                     .subscribe(admin => {
                          if (admin) {
                            callback(admin);
                           }
                    }, error => {
                      console.log(error);
                      });

  }
  adminLogin(hash: string) {
    this.adminService.adminLogin(hash)
                      .subscribe(
                        admin => console.log('Returned This Admin' + admin)
                      );
  }
  redirectStore() {
    console.log('here');
    this.router.navigate(['/store']);
  }
}
