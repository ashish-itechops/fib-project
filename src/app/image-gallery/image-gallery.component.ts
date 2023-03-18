import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import * as FileSaver from 'file-saver';
import { ImageService } from './image.service';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  
      imgChangeEvt: any = '';
      cropImgPreview: any = '';
      onFileChange(event: any): void {
          this.imgChangeEvt = event;
      }
      cropImg(e: ImageCroppedEvent) {
          this.cropImgPreview = e.base64;
      }
      imgLoad() {
          // display cropper tool
      }
      initCropper() {
          // init cropper
      }
      
      imgFailed() {
          // error msg
      }
      dataURItoBlob(dataURI: string): Blob {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      }
      
      saveImage(): void {
        const blob = this.dataURItoBlob(this.cropImgPreview);
        FileSaver.saveAs(blob, 'cropped-image.png');
      }
      // constructor(private imageService: ImageService) {}
  }

