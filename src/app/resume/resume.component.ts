import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  imagePath: any;
  url: any;
  date: any;
  constructor(public router: Router) { }
  file: any;
  path="My-Site/src/assets/Resume_Old_4.pdf"
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }
  downloadResume(url){
    window.open(url);
    console.log(url);
    
  }
}
