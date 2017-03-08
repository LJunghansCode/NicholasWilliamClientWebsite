import { Component, OnInit } from '@angular/core';
import { StencilService } from './../Stencil.service';
import { Stencil } from './../stencil';
import { AdminService } from './../../admin/Admin.service';

@Component({
  selector: 'app-stencil-gallery',
  templateUrl: './stencil-gallery.component.html',
  styleUrls: ['./stencil-gallery.component.css']
})
export class StencilGalleryComponent implements OnInit {
  stencils: Stencil[];
  private admin = false;
  constructor(public stencilService: StencilService, public adminService: AdminService) { }

  ngOnInit() {
    this.getStencils();
    console.log(this.stencils);
    this.getAdmin();
  }
  getStencils(): void {
    this.stencilService.allStencils()
                       .subscribe(
                         stencils => this.stencils = stencils
                       );
  }
  getAdmin(): void {
    this.adminService.checkAdmin()
                     .subscribe(
                       data => {
                         if(data) {
                           this.admin = true;
                         }
                       }
                     );
  }
}
