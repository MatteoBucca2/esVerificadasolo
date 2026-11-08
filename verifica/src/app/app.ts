import { Component, signal } from '@angular/core';
import { PianoTerra } from './piano-terra/piano-terra';
import { PrimoPiano } from './primo-piano/primo-piano';
import { Intestazione } from './intestazione/intestazione';
@Component({
  imports: [PianoTerra, PrimoPiano, Intestazione],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('verifica');
}
