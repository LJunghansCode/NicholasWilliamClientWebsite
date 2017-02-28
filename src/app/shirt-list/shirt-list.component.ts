import { Component, OnInit } from '@angular/core';
import { ShirtService } from './../Shirt.service';
import { Shirt } from './../shirt';

@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.css']
})

export class ShirtListComponent implements OnInit {
  shirts: Shirt[];

  constructor(public shirtService: ShirtService) { }

  ngOnInit() {
     this.getShirts();
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

}
