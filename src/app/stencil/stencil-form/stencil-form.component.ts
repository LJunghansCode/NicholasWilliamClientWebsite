import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { StencilService } from './../Stencil.service';
import { Stencil } from './../stencil';

@Component({
  selector: 'app-stencil-form',
  templateUrl: './stencil-form.component.html',
  styleUrls: ['./stencil-form.component.css']
})
export class StencilFormComponent implements OnInit {
  filesToUpload: File[];
  success: string;
  public stencilForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required]
  });
  constructor(public fb: FormBuilder, public stencilService: StencilService) {
    this.filesToUpload = [];
}
ngOnInit() {
}
fileChangeEvent(fileInput: any) {
        this.filesToUpload = <File[]> fileInput.target.files;
}
upload(callback) {
        this.makeFileRequest('http://localhost:4200/api/uploadStencil', [], this.filesToUpload).then((result) => {
            callback(result);
        }, (error) => {
            console.error(error);
        });
    }
makeFileRequest(url: string, params: Array<string>, files: File[]) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData();
            const xhr = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
    doCreate(event) {
      this.upload((data) => {
          const returnedImageFromUpload = data;
          this.stencilForm.value.image = returnedImageFromUpload.added;
                this.stencilService.newStencil(this.stencilForm.value)
                       .subscribe(
                           shirt => {
                           this.success = 'Added!';
                           this.stencilForm.reset();
                           }
                       );
      });
    }
}
