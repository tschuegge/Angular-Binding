import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-event-binding',
  imports: [Child],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.scss',
})
export class EventBinding {

  /**
   * Signal für die Ausgabe der Button-Events
   */
  outputButtonEvents = signal("Noch kein Event gefeuert...");

  /**
   * Signal für die Ausgabe der ChildComponent-Events
   */
  outputChildComponentNumber = signal("Noch keine Nummer gemeldet...");

  /**
   * Klick auf den Button
   */
  buttonClick(): void {
    this.outputButtonEvents.set("Click!");
  }

  /**
   * Doppelklick auf den Button
   * @param event Informationen über das Event
   */
  buttonDoubleClick(event: MouseEvent): void {
    this.outputButtonEvents.set("Doubleclick! (Shift key pressed: " + event.shiftKey + ")");
  }

  /**
   * Mauszeiger fuhr über den Button
   * @param event Informationen über das Event
   */
  buttonMouseOver(event: MouseEvent): void {
    this.outputButtonEvents.set("Mouse over! (In coords: " + event.x + "/" + event.y + ")");
  }

  /**
   * Mauszeiger verlies den Button
   * @param event Informationen über das Event
   */
  buttonMouseOut(event: MouseEvent): void {
    this.outputButtonEvents.set("Mouse out! (Out coords: " + event.x + "/" + event.y + ")");
  }

  /**
   * Child-Component hat Nummer gemeldet
   */
  childComponentReportsNumber(number: Number) {
    this.outputChildComponentNumber.set("Nummer der Kind Component: " + number);
  }
}
