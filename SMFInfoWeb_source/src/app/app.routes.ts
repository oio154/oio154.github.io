import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AddressbookComponent } from './views/addressbook/addressbook.component';
import { ArticlesComponent } from './views/components/articles/articles.component';

export const routes: Routes = [
    {path: '', component: MainComponent, children: [
        {path: '', component: ArticlesComponent},
        {path: 'addressbook', component: AddressbookComponent}
    ]}
];
