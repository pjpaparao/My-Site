import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-topics',
  templateUrl: './my-topics.component.html',
  styleUrls: ['./my-topics.component.css']
})
export class MyTopicsComponent implements OnInit {

  constructor() { }

  topics = ["corejava", "spring-mvc", "spring-rest", "hibernate", "spring-boot", "angular 6", "html", "css", "mysql"]

  ngOnInit() {
  }
  getTutorial(tu) {
    if (tu == "corejava") {
      tu = "java"
    }
    if (tu == "spring-rest") {
      window.open("https://howtodoinjava.com/spring-restful/")
    }
    if (tu == "angular 6") {
      window.open("https://angular.io")
    }
    if (tu == "html" || tu == "css" || tu == "mysql") {
      tu = (tu == "mysql") ? "sql" : tu;
      window.open("https://www.w3schools.com/" + tu + "/")
    }
    else {
      window.open("https://www.javatpoint.com/" + tu + "-tutorial");
    }
  }
}
