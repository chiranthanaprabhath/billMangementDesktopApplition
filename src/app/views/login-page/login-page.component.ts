import { Component, OnInit } from '@angular/core';
import {ImagePath} from "../../models/constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  imagePath = new ImagePath();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
