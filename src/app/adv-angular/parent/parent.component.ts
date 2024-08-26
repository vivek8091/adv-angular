import { Component, ContentChild, contentChild, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  constructor(public authService:AuthService,private router: Router){  }

  goToChild() {
    this.router.navigate(['/adv-angular/child']);
  }

  logout(){
    this.authService.logout();
  }
}
