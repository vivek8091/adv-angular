import { Routes } from '@angular/router';
import path from 'path';
import { ArraysComponent } from './arrays/arrays.component';


export const routes: Routes = [
    {path: 'adv-angular',loadChildren: () => import('./adv-angular/adv-angular.module').then(m => m.AdvAngularModule)}
];