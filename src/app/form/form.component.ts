import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  id: number;
  name: string;
  username: string;
  email: string;
  submit = "SUBMIT";
  dataArr: User[] = [];
  edited = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers().subscribe(data => (this.dataArr = data));
  }
  newData: any;
  
  onSubmit() {
    console.log(this.edited)
    if (this.edited) {
      console.log("sadsg")
      this.dataArr.forEach(element => {
        if(element.id ==this.id ){
          element.name = this.name;
          element.username = this.username;
          element.email = this.email;
        }
      });
      this.edited = false
    } else {
      console.log("test")
      this.newData = new User();
      this.newData.id = this.dataArr.length + 1;
      this.newData.name = this.name;
      this.newData.username = this.username;
      this.newData.email = this.email;

      this.dataService.addUser(this.dataArr).subscribe(user => {
        return this.dataArr.push(this.newData);
      });
      this.submit = "SUBMIT";
      console.log(this.dataArr);
    }
  }

  editdata(object: any) {
    this.edited = true;
    console.log(this.edited)

    this.id = object.id;
    this.name = object.name;
    this.username = object.username;
    this.email = object.email;

    this.submit = "SAVE";
  }

  deleteData(object:any){
    this.dataArr.splice(this.dataArr.indexOf(object), 1)
  }
}
