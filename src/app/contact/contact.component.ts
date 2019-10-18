import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }
  contact(type){
    console.log(type);
    if(type=="dribbble"){
      window.open('www.dribbble.com');
    }
    if(type=="twitter"){
      window.open('www.twitter.com');
    }
    if(type=="linkedin"){
      window.open('www.linkedin.com');
    }
    if(type=="fb"){
      window.open('www.facebook.com');
    }
  }
}
