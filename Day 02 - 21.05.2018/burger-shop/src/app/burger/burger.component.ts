import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Additions } from '../sharad/models/additions.model';
import { DoneLevel } from '../sharad/models/done-level.model';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input("burgerType") myBurgerType: string;
  @Output("chipsAdd") addChips: EventEmitter<void> = new EventEmitter<void>();
  static counter: number = 1;
  burgerCounter: number;
  additions: Additions = new Additions();
  additionKeys: string[] = [];
  doneLevel = DoneLevel;


  handleAdditinSubmit(key: string) {

    if (key == "chipsCount")
      this.addChips.emit();

    switch (key) {
      case "extraLarge": this.additions.extraLarge = !(this.additions.extraLarge); break;
      case "doneLevel": this.additions.doneLevel = (this.additions.doneLevel + 1) % 4; break;
      default: this.additions[key]++;
    }
  }
  constructor() {
    console.log(this.additions, `Burger num ${BurgerComponent.counter} ctor`)
    this.burgerCounter = BurgerComponent.counter++;
    this.additionKeys = Object.keys(this.additions);
  }

  ngOnInit() {
  }

}
