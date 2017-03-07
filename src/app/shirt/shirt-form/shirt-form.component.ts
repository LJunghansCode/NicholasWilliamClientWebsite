import { Component, NgZone, Inject, OnInit  } from '@angular/core';
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
  success: string;
  file: File;
  filesToUpload: File[];
  photoUrlList: JSON[];
  public shirtForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    size: ['', Validators.required]
  });
constructor (public fb: FormBuilder, public shirtService: ShirtService) {
    this.filesToUpload = [];
}
ngOnInit() {
    this.getShirtUrls();
}
getShirtUrls(): void {
    console.log('here');
        this.shirtService.getPhotoUrls()
                         .subscribe(
                            data => {
                                this.photoUrlList = data;
                            }
                          );
  }
uploadFileToServer(fileToUpload: File) {
    this.shirtService.imageUpload(fileToUpload);
}
fileChangeEvent(fileInput: any) {
        this.filesToUpload = <File[]> fileInput.target.files;
}
upload(callback) {
        this.makeFileRequest('http://localhost:4200/api/upload', [], this.filesToUpload).then((result) => {
            callback(result);
        }, (error) => {
            console.log(error);
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
          this.shirtForm.value.image = returnedImageFromUpload.added;
          console.log(this.shirtForm.value);
      });
      setTimeout(() => {
      console.log(this.shirtForm.value);
      this.shirtService.newShirt(this.shirtForm.value)
                       .subscribe(
                           shirt => {
                           this.success = 'Added!';
                           this.shirtForm.reset();
                           }
                       ); }, 500);

                       this.getShirts();
    }
  getShirts(): void {
        this.shirtService.allShirts()
                          .subscribe(
                            shirts => this.shirts = shirts
                          );
  }
}

