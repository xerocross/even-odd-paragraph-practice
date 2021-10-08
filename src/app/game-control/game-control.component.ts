import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() newParagraphCreated = new EventEmitter<{increment: number}>();
  incrementNumber: number = 0;
  intervalNumber : any;
  constructor() { }

  ngOnInit(): void {
  }


  onStart() : void {
    this.incrementNumber = 0;
    this.intervalNumber = setInterval(() => {
      this.newParagraphCreated.emit({
        increment : this.incrementNumber
      });
      this.incrementNumber++;
    },1000)
  }


  onStop() : void {
    clearTimeout(this.intervalNumber);
  }
}
