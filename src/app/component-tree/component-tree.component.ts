import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.scss']
})
export class ComponentTreeComponent {

  /**
   * Array mit den Zufallsnummern, welche als ChildComponent dargestellt werden
   */
  componentNumbers: Array<number> = [];

  /**
   * Nachricht falls eine ChildComponent eine Nummer zurückmeldet
   */
  message?: string;

  /**
   * Weitere ChildComponent hinzufügen
   *
   * Eigentlich wird nur eine Zufallszahl zum Array 'componentNumber' hinzugefügt,
   * aber für jeden Eintrag in diesem Array wird in der View mittels *ngFor eine ChildComponent ausgegeben
   */
  addComponent(): void {
    const randomNumber = Math.round(Math.random() * 1000); // Zufallszahl von 0...1000
    this.componentNumbers.push(randomNumber); // Zufallszahl zu den ComponentNumbers hinzufügen
  }

  /**
   * Letzt ChildComponent entfernen
   *
   * Eigentlich wird nur der letzte Eintrag im Array 'componentNumber' entfernt,
   * aber für jeden Eintrag in diesem Array wird in der View mittels *ngFor eine ChildComponent ausgegeben
   */
  removeComponent(): void {
    this.componentNumbers.pop(); // Letzt Zahl aus den ComponentNumbers entfernen
  }

  /**
   * Zeigt 3 Sekunden lang eine Meldung an, welche ChildComponent sich gemeldet hat
   * @param nr Nummer der ChildComponent
   */
  showComponentNr(nr: number): void {

    // Nachricht ausgeben
    // in der View ist mit *ngIf definiert, dass ein Alert angezeigt wird, sobald etwas in der
    // Instanzvariable 'message' steht
    this.message = `Component Nr. ${nr} hat sich gemeldet`;

    // Nach 3 Sekunden wird die Message wieder auf 'undefined' zurückgesetzt und somit der Alert ausgeblendet
    timer(3000).subscribe(() => this.message = undefined);
  }

}
