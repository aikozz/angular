import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
User!:string;
color!:boolean;
elements=[1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
    this.User="Sabrina";
    this.color=false;
  }

  UserClick(){
    console.log("hello !!!");
    this.color=true;
  }

}
