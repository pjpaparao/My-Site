import { Component } from '@angular/core';
import { MySrviceService } from './my-srvice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Site';
  constructor(public util: MySrviceService,public router:Router) { }
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.util.goToPage('/home/profile');
  }
}
