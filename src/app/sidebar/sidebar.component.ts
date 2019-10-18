import { Component, OnInit } from '@angular/core';
import * as  data from '..//../assets/sidebar.json';
import { MySrviceService } from '../my-srvice.service.js';
const sidebar = (<any>data.default)
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public util: MySrviceService) { }
  path = "assets/img/angular-logo.jpg";
  pages = [];
  activePage:any;
  ngOnInit() {
    this.pages = sidebar;
    console.log(this.pages);
  }
  showActive(title){
   return  "red"
  }
  }


