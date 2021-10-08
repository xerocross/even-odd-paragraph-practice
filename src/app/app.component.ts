import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paragraphs : number[] = [];

  onNewParagraphAdded(event : {increment : number}) {
    console.log(event);
    this.paragraphs.push(event.increment)
    console.log("paragraphs: ");
    console.log(this.paragraphs);
  }
}
