import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input()
  componentNumber = 0;

  @Output()
  numberReport = new EventEmitter<number>();

  buttonClicked(): void {
    this.numberReport.emit(this.componentNumber);
  }

}
