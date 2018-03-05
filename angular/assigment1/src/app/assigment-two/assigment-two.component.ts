import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-two',
  templateUrl: './assigment-two.component.html',
  styleUrls: ['./assigment-two.component.css']
})
export class AssigmentTwoComponent implements OnInit {
  userName = '';
  constructor() {
  }
  clearInput () {
    this.userName = '';
  }
  ngOnInit() {
  }

}
