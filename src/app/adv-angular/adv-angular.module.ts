import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvAngularRoutingModule } from './adv-angular-routing.module';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdvAngularRoutingModule,
    RouterOutlet
  ]
})
export class AdvAngularModule { }
