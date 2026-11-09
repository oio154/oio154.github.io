import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { canSeeGuard } from './guards/can-see.guard';

export const routes: Routes = [
    {path: "", component: MainComponent, canActivate:[canSeeGuard]}
];
