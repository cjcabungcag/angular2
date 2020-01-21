import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-external",
  templateUrl: "./external.component.html",
  styleUrls: ["./external.component.css"]
})
export class ExternalComponent implements OnInit {
  fullname: string;
  constructor(private fb:FormBuilder) {}

  reactiveForm=this.fb.group({firstname:["", Validators.required]})

  ngOnInit() {}

  onSubmit() {
    console.log(this.fullname);
  }
}
