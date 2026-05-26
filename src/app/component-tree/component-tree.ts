import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-component-tree',
  imports: [Child],
  templateUrl: './component-tree.html',
  styleUrl: './component-tree.scss',
})
export class ComponentTree {

  /**
   * Array mit den Zufallsnummern, welche als Child-Component dargestellt werden
   */
  componentNumbers = signal<Array<number>>([]); // Signal mit dem Typ "Array" welches Elemente des Typs "number" beinhaltet

  /**
   * Weitere ChildComponent hinzufügen
   *
   * Eigentlich wird nur eine Zufallszahl zum Array 'componentNumber' hinzugefügt,
   * aber für jeden Eintrag in diesem Array wird in der View mittels *ngFor eine ChildComponent ausgegeben
   */
  addComponent(): void {
    const randomNumber = Math.round(Math.random() * 1000); // Zufallszahl von 0...1000

    let componentNumbersArray = this.componentNumbers(); // Array aus Signal holen
    componentNumbersArray.push(randomNumber); // Zufallszahl zu den ComponentNumbers hinzufügen
    this.componentNumbers.set(componentNumbersArray);  // Signal aktualisieren

    // Die oberen drei Zeilen lassen sich auch mit einem Update realisieren:
    // this.componentNumbers.update(array => [...array, randomNumber]);
    //
    // Dabei wird das Array kopiert (Spread-Operator): [...array]
    // und der neue Wert hinzugefügt:                  [...array, randomNumber]
    //
    // Der Methode 'update' muss eine Funktion angegeben werden, welche den Wert aktualisiert.
    // In diesem Beispiel ist dies mit einer Lambda-Function realisiert worden:
    // array => [...array, randomNumber]
    //   ↑                   ↑
    // Eingabewert      Rückgabewert (wieder ein Array, in diesem Fall)
  }

  /**
   * Letzt ChildComponent entfernen
   *
   * Eigentlich wird nur der letzte Eintrag im Array 'componentNumber' entfernt,
   * aber für jeden Eintrag in diesem Array wird in der View mittels *ngFor eine ChildComponent ausgegeben
   */
  removeComponent(): void {
    let componentNumbersArray = this.componentNumbers(); // Array aus Signal holen
    componentNumbersArray.pop(); // Letzt Zahl aus den ComponentNumbers entfernen
    this.componentNumbers.set(componentNumbersArray);  // Signal aktualisieren
  }

  /**
   * Zeit eine Meldung an, welche ChildComponent sich gemeldet hat
   * @param nr Nummer der ChildComponent
   */
  showComponentNr(nr: number): void {
    alert(`Component Nr. ${nr} hat sich gemeldet`); // Gibt eine Messagebox aus
  }
}
