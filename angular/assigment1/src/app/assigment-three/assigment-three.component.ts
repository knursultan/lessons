import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-three',
  templateUrl: './assigment-three.component.html',
  styleUrls: ['./assigment-three.component.css']
})
export class AssigmentThreeComponent implements OnInit {
  array = [];
  showText = false;
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.showText = !this.showText;
    // this.array.push(this.array.length + 1);
    this.array.push(new Date());
  }
}
