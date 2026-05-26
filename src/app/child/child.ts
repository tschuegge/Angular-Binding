import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  /**
   * Eingabe einer Nummer von der übergeordneten Component
   */
  componentNumber = input<number>(0);

  /**
   * Auslösen eines Events an die übergeordnete Component
   */
  numberReport = output<number>();

  buttonClicked(): void {

    // Emittiert ein neues Event an die übergeordnete Component
    this.numberReport.emit(this.componentNumber()); // Beachte, dass 'input()' ein Signal erzeugt, welches eine Funktion ist
  }
}
