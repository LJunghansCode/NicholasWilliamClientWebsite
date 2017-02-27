import { Component, OnInit } from '@angular/core';
import { AdminService } from './../Admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
  adminLogin(hash: string) {
    this.adminService.adminLogin(hash);
  }

}
