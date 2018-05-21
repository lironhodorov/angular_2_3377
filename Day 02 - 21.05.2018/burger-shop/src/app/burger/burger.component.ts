import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  static counter:number=1;
  burgerCounter:number;

  constructor() { 
    console.log(`Burger num ${BurgerComponent.counter} ctor`)
    this.burgerCounter=BurgerComponent.counter++;
  }

  ngOnInit() {
  }

}
