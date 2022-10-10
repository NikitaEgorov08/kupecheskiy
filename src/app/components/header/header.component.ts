import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mobileMenuShow: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.mobileMenuShow = !this.mobileMenuShow;
  }
}
