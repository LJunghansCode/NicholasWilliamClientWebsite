import { Component, OnInit } from '@angular/core';
import { ShirtService } from './../Shirt.service';


const URL = 'api/shirtImage';

@Component({
  selector: 'app-shirt-upload',
  templateUrl: './shirt-upload.component.html',
  styleUrls: ['./shirt-upload.component.css']
})
export class ShirtUploadComponent {
  // public uploader: FileUploader = new FileUploader({url: URL});
  // public hasBaseDropZoneOver: boolean = false;
  // public hasAnotherDropZoneOver: boolean = false;
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }
  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
}


