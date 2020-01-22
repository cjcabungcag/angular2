import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'
import { User } from "../user.model";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  userInfo:Array<any>=[];


  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.viewData(this.id)
    .subscribe(posts =>{
      this.userInfo.push(posts)
      console.log(this.userInfo);
      
    })
  }

}
