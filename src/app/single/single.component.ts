import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  /**
   * Instanzvariable welche an das Textfeld gebunden ist
   */
  textfieldValue = '';

  /**
   * Instanzvariable welche ausgegeben wird
   */
  textOutputValue = '';

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
      (zahl) => {
        this.textfieldValue = 'Aktuelle Zahl: ' + zahl;
        this.textOutputValue = 'Aktuelle Zahl: ' + zahl;
      }
    );
  }

  /**
   * Methode welche ausgeführt wird, wenn der Button geklickt wird
   */
  buttonClick() {

    // In der View ist mit *ngIf definiert, dass der Alert angezeigt wird, wenn die
    // Instanzvariable 'buttonWasClicked' auf 'true' gesetzt wird
    this.buttonWasClicked = true;

    // Nach einer Sekunde die Instanzvariable auf false setzen (Alert ausblenden)
    timer(3000).subscribe(
      () => {
        this.buttonWasClicked = false;
      }
    );
  }

}
