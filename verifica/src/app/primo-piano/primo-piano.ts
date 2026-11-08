import { Component } from '@angular/core';
import { LabInformatica } from '../lab-informatica/lab-informatica';
import { Biblioteca } from '../biblioteca/biblioteca';
@Component({
  imports: [LabInformatica, Biblioteca],
  selector: 'app-primo-piano',
  styleUrl: './primo-piano.css',
  templateUrl: './primo-piano.html',
})
export class PrimoPiano {}
