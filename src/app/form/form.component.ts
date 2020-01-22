import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  id: any;
  name: string;
  username: string;
  email: string;
  edited = false;
  submit = "SUBMIT";
  dataArr: User[] = [];

  newData: any;
  showID = false;

  constructor(private dataService: DataService) {
    this.newData = new User;
  }
  ngOnInit() {
    return this.dataService.getUsers().subscribe(data => (this.dataArr = data));
  }

  onSubmit() {
    if (this.edited) {
      this.dataArr.forEach(element => {
        if(element.id == this.id ){
          element.name = this.name;
          element.username = this.username;
          element.email = this.email;
        }
      });
      this.edited = false
    } else {

      this.newData = new User();

      this.newData.id = this.dataArr.reduce(
        (max, array) => (array.id > max ? array.id : max),
        this.dataArr[0].id)+1;
      
      this.newData.name = this.name;
      this.newData.username = this.username;
      this.newData.email = this.email;

      this.dataService.addUser(this.newData).subscribe(newData => {
        console.log(newData);
        return this.dataArr.push(this.newData);
      });

      this.submit = "SUBMIT"; 
      console.log(this.dataArr);
    }
    this.showID =false
  }

  editdata(object: any) {
    this.edited = true;
    this.id = object.id;
    this.name = object.name;
    this.username = object.username;
    this.email = object.email;
    this.showID =true;

    this.submit = "SAVE"; 
  }

  deleteData(object:any){
    this.dataService.deleteUser(object.id).subscribe(response =>{
      console.log(response);
      this.dataArr.splice(this.dataArr.indexOf(object), 1)
    })
  }
}
