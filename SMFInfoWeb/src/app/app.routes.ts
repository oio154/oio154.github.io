import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AddressbookComponent } from './views/addressbook/addressbook.component';

export const routes: Routes = [
    {path: '', component: MainComponent, children: [
        {path: 'addressbook', component: AddressbookComponent}
    ]}
];
