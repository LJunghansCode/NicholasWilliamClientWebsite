import { Component, OnInit } from '@angular/core';
import { ShirtService } from './../Shirt.service';
import { Shirt } from './../shirt';
import { AdminService } from './../../admin/Admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.css']
})

export class ShirtListComponent implements OnInit {
  shirts: Shirt[];
  private admin = false;

  constructor(public shirtService: ShirtService, public adminService: AdminService, private router: Router) { }

  ngOnInit() {
     this.getShirts();
     this.getAdmin();
  }
  getShirts(): void {
        this.shirtService.allShirts()
                         .subscribe(
                            shirts => this.shirts = shirts
                          );
  }
  deleteShirt(id: number) {
      this.shirtService.deleteShirt(id)
                       .subscribe(
                         shirts => this.getShirts()
                       );
  }
  getAdmin(): void {
    this.adminService.checkAdmin()
                     .subscribe(
                       data => {
                         if (data) {
                           this.admin = true;
                         }
                       }
                     );
  }
  getOneShirt(_id: number) {
    this.router.navigate(['Shirt', _id]);
  }

}
