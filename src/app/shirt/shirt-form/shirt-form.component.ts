import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ShirtService } from './../Shirt.service';
import { Shirt } from './../shirt';

@Component({
  selector: 'app-shirt-form',
  templateUrl: './shirt-form.component.html',
  styleUrls: ['./shirt-form.component.css']
})
export class ShirtFormComponent implements OnInit {
  shirts: Shirt[];
  success: string
  public shirtForm = this.fb.group({
    name: ['', Validators.required],
    imgUrl: ['', Validators.required],
    size: ['', Validators.required]
  });

constructor (public fb: FormBuilder, public shirtService: ShirtService) {}
ngOnInit() {
     this.getShirts();
}

  doCreate(event) {
      this.shirtService.newShirt(this.shirtForm.value)
                       .subscribe(
                           shirt => {this.shirts.push(shirt);
                           this.success = 'Added!';
                           this.shirtForm.reset();
                           }
                       );
                       this.getShirts();
    }
  getShirts(): void {
        this.shirtService.allShirts()
                          .subscribe(
                            shirts => this.shirts = shirts
                          );
  }
}

