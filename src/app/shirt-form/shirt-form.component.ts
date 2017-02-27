import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-shirt-form',
  templateUrl: './shirt-form.component.html',
  styleUrls: ['./shirt-form.component.css']
})
export class ShirtFormComponent implements OnInit {
  public shirtForm = this.fb.group({
    name: ['', Validators.required],
    imgUrl: ['', Validators.required],
    size: ['', Validators.required]
  });
constructor(public fb: FormBuilder) {}
doCreate(event) {
}

  ngOnInit() {
  }

}
