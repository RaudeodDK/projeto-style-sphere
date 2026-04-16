import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Section1 } from './section1/section1';   




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Section1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-style-sphere');
}
