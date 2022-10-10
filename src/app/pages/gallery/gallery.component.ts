import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  modalImageOpen: boolean = false;
  currentId: number = 0;
  photos: any[] = [
    { id: 1, url: '../../../assets/img/gallery/1.jpg' },
    { id: 2, url: '../../../assets/img/gallery/2.jpg' },
    { id: 3, url: '../../../assets/img/gallery/3.jpg' },
    { id: 4, url: '../../../assets/img/gallery/4.jpg' },
    { id: 5, url: '../../../assets/img/gallery/5.jpg' },
    { id: 6, url: '../../../assets/img/gallery/6.jpg' },
    { id: 7, url: '../../../assets/img/gallery/7.jpg' },
    { id: 8, url: '../../../assets/img/gallery/8.jpg' },
    { id: 9, url: '../../../assets/img/gallery/9.jpg' },
    { id: 10, url: '../../../assets/img/gallery/10.jpg' },
    { id: 11, url: '../../../assets/img/gallery/11.jpg' },
    { id: 12, url: '../../../assets/img/gallery/12.jpg' },
    { id: 13, url: '../../../assets/img/gallery/13.jpg' },
    { id: 14, url: '../../../assets/img/gallery/14.jpg' },
    { id: 15, url: '../../../assets/img/gallery/15.jpg' },
    { id: 16, url: '../../../assets/img/gallery/16.jpg' },
    { id: 17, url: '../../../assets/img/gallery/17.jpg' },
    { id: 18, url: '../../../assets/img/gallery/18.jpg' },
    { id: 19, url: '../../../assets/img/gallery/19.jpg' },
    { id: 20, url: '../../../assets/img/gallery/20.jpg' },
    { id: 21, url: '../../../assets/img/gallery/21.jpg' },
    { id: 22, url: '../../../assets/img/gallery/22.jpg' },
    { id: 23, url: '../../../assets/img/gallery/23.jpg' },
    { id: 24, url: '../../../assets/img/gallery/24.jpg' },
    { id: 25, url: '../../../assets/img/gallery/25.jpg' },
    { id: 26, url: '../../../assets/img/gallery/26.jpg' },
    { id: 27, url: '../../../assets/img/gallery/27.jpg' },
    { id: 28, url: '../../../assets/img/gallery/28.jpg' },
    { id: 29, url: '../../../assets/img/gallery/29.jpg' },
    { id: 30, url: '../../../assets/img/gallery/30.jpg' },
    { id: 31, url: '../../../assets/img/gallery/31.jpg' },
    { id: 32, url: '../../../assets/img/gallery/32.jpg' },
    { id: 33, url: '../../../assets/img/gallery/33.jpg' },
    { id: 34, url: '../../../assets/img/gallery/34.jpg' },
    { id: 35, url: '../../../assets/img/gallery/35.jpg' },
    { id: 36, url: '../../../assets/img/gallery/36.jpg' },
    { id: 37, url: '../../../assets/img/gallery/37.jpg' },
    { id: 38, url: '../../../assets/img/gallery/38.jpg' },
    { id: 39, url: '../../../assets/img/gallery/39.jpg' },
    { id: 40, url: '../../../assets/img/gallery/40.jpg' },
    { id: 41, url: '../../../assets/img/gallery/41.jpg' },
    { id: 42, url: '../../../assets/img/gallery/42.jpg' },
    { id: 43, url: '../../../assets/img/gallery/43.jpg' },
    { id: 44, url: '../../../assets/img/gallery/44.jpg' },
    { id: 45, url: '../../../assets/img/gallery/45.jpg' },
    { id: 46, url: '../../../assets/img/gallery/46.jpg' },
    { id: 47, url: '../../../assets/img/gallery/47.jpg' },
    { id: 48, url: '../../../assets/img/gallery/48.jpg' },
    { id: 49, url: '../../../assets/img/gallery/49.jpg' },
    { id: 50, url: '../../../assets/img/gallery/50.jpg' },
    { id: 51, url: '../../../assets/img/gallery/51.jpg' },
    { id: 52, url: '../../../assets/img/gallery/52.jpg' },
    { id: 53, url: '../../../assets/img/gallery/53.jpg' },
    { id: 54, url: '../../../assets/img/gallery/54.jpg' },
    { id: 55, url: '../../../assets/img/gallery/55.jpg' },
    { id: 56, url: '../../../assets/img/gallery/56.jpg' },
    { id: 57, url: '../../../assets/img/gallery/57.jpg' },
    { id: 58, url: '../../../assets/img/gallery/58.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
  modalImage(id: number) {
    this.modalImageOpen = !this.modalImageOpen;
    this.currentId = id;
  }
  next(): void {
    if (this.currentId >= 0 && this.currentId < 58) {
      this.currentId++;
    }
  }
  prev(): void {
    if (this.currentId > 1 && this.currentId <= 58) {
      this.currentId--;
    }
  }
}
