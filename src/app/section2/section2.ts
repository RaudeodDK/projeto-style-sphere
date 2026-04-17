import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section2',
  imports: [CommonModule],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {
  tours = [
    { texto: 'Paris', img: 'img-1.png' },
    { texto: 'Singapura', img: 'img-2.png' },
    { texto: 'Roma', img: 'img-3.png' },
     ];
}