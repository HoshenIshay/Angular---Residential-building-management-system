import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { ImageObj } from '../Interfaces/imageObj';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {

  constructor(private UploadService: UploadService) { }
  cnt = 0 ;
  images: ImageObj[] = [];
  imageLoading: true | undefined ;

  ngOnInit(): void {
  }
  onSelct(event: any) {
    const files = event.target.files;
    if (files.length <= 5 && this.images.length <= 4) {
      for (let i = 0; i < files.length; i++) {
        this.cnt = this.cnt + 1 
        const imageFile = {
          name : files[i].name, 
          url: '' ,
          id : this.cnt, 
          finish : function finishUpload(url:string) {},
          imgEvent : event
        };
        const reader = new FileReader();
        reader.onload = (filedata) => {
        imageFile.url = reader.result + '';
        this.images.push(imageFile)
        this.UploadService.upload(imageFile);
        };
        reader.readAsDataURL(files[i])
      }
    }
  }

   delete(srcFromParent : string){
     for (let i = 0; i < this.images.length; i++){
       if(this.images[i].url == srcFromParent){
       this.images.splice(i,1);
       this.UploadService.deleteFunc(this.images[i]);
        }
     }
   }
  

}
