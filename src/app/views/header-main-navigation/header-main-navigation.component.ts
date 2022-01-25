import { Component, OnInit } from '@angular/core';
import { ImagePath } from '../../models/constant';

@Component({
  selector: 'app-header-main-navigation',
  templateUrl: './header-main-navigation.component.html',
  styleUrls: ['./header-main-navigation.component.css']
})
export class HeaderMainNavigationComponent implements OnInit {

  imagePath = new ImagePath();
  constructor() { }

  ngOnInit(): void {

  }
  goto(){

  }
}
