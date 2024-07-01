import { Component, Input, input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  // @Input() childValue : number = 0;
  // @Output() valueChanges = new EventEmitter<number>();

  // increment(){
  //   this.childValue++;
  //   this.valueChanges.emit(this.childValue);
  // }

  // childProperty : string = "Hello from child";
  // childMethod(){
  //   console.log("Method from the child");
    
  // }

  childProperty:string = 'hello from child';
  childMethod(){
    console.log("Child Method");
    
  }
}
