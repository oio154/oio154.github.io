import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { TawkComponent } from '../../_core/tawk/tawk.component';
import { WindyComponent } from '../../_share/windy/windy.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, TawkComponent, WindyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
