import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Shirt } from '../shirt/shirt';
import { ShirtService } from '../shirt/Shirt.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shirt-single',
  templateUrl: './shirt-single.component.html',
  styleUrls: ['./shirt-single.component.css']
})
export class ShirtSingleComponent implements OnInit {
  id: number;
  shirtName: string;
  shirtSize: string;
  shirtUrl: string;

  private sub: any;

  constructor(private shirtService: ShirtService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadShirt(this.id);
    });
  }
  loadShirt(id: number) {
    this.shirtService.oneShirt(this.id)
                     .subscribe(
                       data => {
                        if (data) {
                          this.shirtName = data.name;
                          this.shirtSize = data.size;
                          this.shirtUrl = data.image;
                        }
                      }
                    );
  }
}
