import { Component } from '@angular/core';
import { WindyComponent } from '../../_share/windy/windy.component';
import { MenuComponent } from '../../_share/menu/menu.component';
import { VersionComponent } from '../../_share/version/version.component';
import { NewDomainComponent } from '../../_share/new-domain/new-domain.component';


@Component({
  selector: 'app-main',
  imports: [WindyComponent, MenuComponent,VersionComponent, NewDomainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
