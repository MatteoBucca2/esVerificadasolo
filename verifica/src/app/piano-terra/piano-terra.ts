import { Component } from '@angular/core';
import { Palestra } from '../palestra/palestra';
import { Bar } from '../bar/bar';
@Component({
  imports: [Palestra, Bar],
  selector: 'app-piano-terra',
  styleUrl: './piano-terra.css',
  templateUrl: './piano-terra.html',
})
export class PianoTerra {}
