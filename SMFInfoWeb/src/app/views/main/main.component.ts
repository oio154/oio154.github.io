import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
