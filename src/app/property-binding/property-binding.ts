import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.scss',
})
export class PropertyBinding {

  /**
   * Signal welches in Instanzvariable gespeichert ist und an das Textfeld gebunden ist
   */
  textfieldValue = signal("");

  /**
   * Signal welches in Instanzvariable gespeichert ist und ausgegeben wird
   */
  textOutputValue = signal("");

  /**
   * Zähler für Ausgabe
   */
  private counter = 0;

  /**
   * Erhöhe den Wert des Zählers
   */
  increaseValue(): void {
    this.counter++; // Verkleinert den Zähler um 1, dies ist eine Kurzschreibweise für: this.counter = this.counter + 1;
    this.updateView(); // Eigene Methode aufrufen um die Signale neu zu setzen und somit die View zu aktualiseren
  }

  /**
   * Vermindere den Wert des Zählers
   */
  decreaseValue(): void {
    this.counter--; // Verkleinert den Zähler um 1, dies ist eine Kurzschreibweise für: this.counter = this.counter - 1;
    this.updateView(); // Eigene Methode aufrufen um die Signale neu zu setzen und somit die View zu aktualiseren
  }

  /**
   * Aktualisiere Signal mit dem aktuellen Wert des Zählers
   */
  private updateView(): void {
    this.textfieldValue.set("Der Zähler hat momentan den Wert " + this.counter + " (Signal im Textfeld)");
    this.textOutputValue.set("Der Zähler hat momentan den Wert " + this.counter + " (Signal als Textausgabe)");
  }

  /**
   * Angular Lifecycle Hook
   * ngOnInit() wird von Angular automatisch ausgeführt nach dem die Component initialisiert wurde
   */
  ngOnInit(): void {
    this.updateView();
  }

}
