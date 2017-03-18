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
  public admin = false;

  constructor(public shirtService: ShirtService, public adminService: AdminService, private router: Router) { }

  ngOnInit() {
     this.getShirts();
     this.getAdmin();
  }
  cardFlip(index) {
        const cards = document.querySelectorAll('.card.effect__click');
        const card = cards[index];
        const c = card.classList;
        c.contains('flipped') === true ? c.remove('flipped') : c.add('flipped');
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
                         if (data.password) {
                           this.admin = true;
                         }
                       }
                     );
  }
  getOneShirt(_id: number) {
    this.router.navigate(['Shirt', _id]);
  }

  openCheckout(shirtName: string) {
    const stripeHandler = (<any>window).StripeCheckout.configure({
              key: 'pk_test_M0DVyWNIScMrc5GlK5kzOojN',
              name: shirtName,
              description: 'A great Luxury Shirt',
              locale: 'auto',
              zipCode: true,
              shippingAddress: true,
              billingAddress: true,
              panelLabel: 'Submit Payment',
              allowRememberMe: false,
              token: (token: any) => {
              token.prodName = shirtName;
                 this.shirtService.newOrder(token)
                             .subscribe(
                              (data) => {
                                console.log(data);
                              },
                              (error) => {
                                console.log(error);
                              }
                            );
                          }
    });

    stripeHandler.open({
      name: 'Nicholas William Clothing',
      description: 'Luxury T-shirt',
      amount: 10000
    });

  }

}
