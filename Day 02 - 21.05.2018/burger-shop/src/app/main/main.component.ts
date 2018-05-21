import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  chipsCount: number = 0;

  addChips() {
    this.chipsCount++;
  }
  burgerArray: string[] = [];

  addBurger(param: string) {
    this.burgerArray.push(param);
  }
  constructor() { }

  ngOnInit() {
  }

}
