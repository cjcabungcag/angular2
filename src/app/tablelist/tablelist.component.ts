import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  name: string;
  username: string;
  email: string;

  constructor(){}

  ngOnInit() {
    
  }

  @Input() parentdata: User[];

  @Output() editData = new EventEmitter<User>();
  @Output() deleteData = new EventEmitter<User>();


  onEdit(event:any) {
    this.editData.emit(event) ;   
  }
  
  onDelete(event:any){
    this.deleteData.emit(event);
  }
  

}
