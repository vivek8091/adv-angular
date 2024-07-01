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
  // parentValue = 0;

  // handleValueChanged(newValue : number){
  //   console.log("New value from child",newValue);
  //   this.parentValue = newValue;
  // }

  // @ViewChild(ChildComponent) childComponent! : ChildComponent;

  // ngAfterViewInit(){
  //   console.log("Child property",this.childComponent.childProperty);
  //   console.log("Child method",this.childComponent.childMethod);
    
  // }

  @ContentChild(ChildComponent) childComponentRef!:ChildComponent;

  ngAfterContentInit(){
    console.log("ChildComponentRef",this.childComponentRef);
    
  }

  constructor(public authService:AuthService,private router: Router){

  }

  logout(){
    this.authService.logout();
  }
}
