import { Component } from '@angular/core';
import { WindyComponent } from '../../_share/windy/windy.component';
import { MenuComponent } from '../../_share/menu/menu.component';


@Component({
  selector: 'app-main',
  imports: [WindyComponent, MenuComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
