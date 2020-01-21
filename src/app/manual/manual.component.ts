import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  // template: '<button (click)="clicked()">Submit</button>',
  //  template: `<button class="myclass"[class.active]="isActive">Submit</button>`,
   template: `<button class="myclass"[style.background]="isActive? 'blue': 'gray' ">Submit</button>`,
  styles: [' .myclass { font-size: 30px;font-weight: bold; border: 3px solid;padding: 20px;float: left;} ']

})
export class ManualComponent implements OnInit {
  public isActive = true
  constructor() { }
  

  ngOnInit() {
  }

  clicked(){
     alert("button clicked!")
  }

}
