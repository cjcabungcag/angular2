import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home = "https://www.codewithchintan.com/content/images/size/w2000/2019/12/Angular-Title-Templates--25-.png"
  constructor() { }

  ngOnInit() {
  }

}
