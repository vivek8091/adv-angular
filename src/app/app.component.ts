import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArraysComponent } from './arrays/arrays.component';
import { ParentComponent } from './adv-angular/parent/parent.component';
import { ChildComponent } from './adv-angular/child/child.component';
import { LoginComponent } from './adv-angular/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArraysComponent,ParentComponent,ChildComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adv-angular';
}
