import { Component, OnInit } from '@angular/core';
import { AdminService } from './../Admin.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminCheck();
  }

  adminCheck() {
    this.adminService.checkAdmin()
                      .subscribe(admin => {
                          if (admin) {
                            console.log(admin);
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
    this.router.navigate(['/store']);
  }
}
