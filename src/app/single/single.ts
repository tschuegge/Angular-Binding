import { Component, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.html',
  styleUrl: './single.scss',
})
export class Single {


  /**
   * Signal welches in Instanzvariable gespeichert ist und an das Textfeld gebunden ist
   */
  textfieldValue = signal('');

  /**
   * Signal welches in Instanzvariable gespeichert ist und ausgegeben wird
   */
  textOutputValue = signal('');

  /**
   * Zähler für Ausgabe
   */
  zaehler = 0;

  /**
   * Instanzvariable welche geändert wird, wenn der Button geklickt wird
   */
  buttonWasClicked = false;

  /**
   * Angular Lifecycle Hook
   * ngOnInit() wird von Angular ausgeführt nach dem die Component initialisiert wurde
   */
  ngOnInit(): void {

    /**
     * Instanzvariablen jede Sekunde um 1 erhöhen
     */
    timer(1000, 1000).subscribe(
      () => {
        this.zaehler++; // Zähler um 1 erhöhen, das ist das gleiche wie: this.zaehler = this.zaehler + 1;
        this.textfieldValue.set('Aktuelle Zahl: ' + this.zaehler);
        this.textOutputValue.set('Aktuelle Zahl: ' + this.zaehler);
      }
    );
  }

  /**
   * Methode welche ausgeführt wird, wenn der Button geklickt wird
   */
  buttonClick() {

    // In der View ist mit @if definiert, dass der Alert angezeigt wird, wenn die
    // Instanzvariable 'buttonWasClicked' auf 'true' gesetzt wird.
    //
    // Dies ist ein "Toggle", wenn der 'buttonWasClicked' auf 'true' war, dann wird sie 'false' und umgekehrt.
    // Es ist das selbe wie:
    // if (this.buttonWasClicked) {
    //   this.buttonWasClicked = false;
    // } else {
    //   this.buttonWasClicked = true;
    // }
    this.buttonWasClicked = !this.buttonWasClicked;
  }



}
