import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrays.component.html',
  styleUrl: './arrays.component.scss'
})
export class ArraysComponent {

  constructor(){
    // this.methodForEach();
    // this.methodMap();
    // this.methodFilter();
    // this.methodFind();
    // this.methodFindIndex();
    // this.methodPush();
    // this.methodPop();
    // this.methodSlice();
    // this.methodFlat();
    // this.methodFlatMap();


    // Manipulating Functions
    // this.methodSplitString();

  }
  // For Each...
  methodForEach(){
    let users = [
      { name: 'Vivek', email: 'abc@gmail.com'},
      { name: 'Nayan', email: 'xyz@gmail.com'}
    ];

    users.forEach(user => {
      console.log("User email",user.name);
      
    })
  }

  // Map...

  methodMap(){
    let tempreturesInCelsius = [20, 25, 30, 35, 40];
    let tempInFh = tempreturesInCelsius.map(celsius => {
      let fh = celsius * 9/5 + 32;
      return fh;
    })
    console.log("new tempreture",tempInFh);
    
  }

  // Filter...
  examScores = [75, 85, 60, 90, 55, 95];
  passingScores: any[] = [];
  methodFilter(){
    this.passingScores = this.examScores.filter(score => {
      return score >= 85;
    })
    console.log("Passinf scores",this.passingScores);
  }

  // Find...

  methodFind(){
    let student = [
      { id: 1, name: 'vivek'},
      { id: 2, name: 'vishal'},
      { id: 3, name: 'kaushik'},
      { id: 4, name: 'nayan'}
    ];
    let targetStudId = 3;
    let foundStud = student.find(student => {
      return student.id === targetStudId;
    });
    console.log("Data",foundStud);
  }

  // Find Index...

  methodFindIndex(){
    let student = [
      { id: 1, name: 'vivek'},
      { id: 2, name: 'vishal'},
      { id: 3, name: 'kaushik'},
      { id: 4, name: 'nayan'}
    ];

    let targetStudId = 1;
    let indexOfTargetStud = student.findIndex(student => {
      return student.id === targetStudId;
    });
    console.log("Data", indexOfTargetStud);
  }
  // Push...

  methodPush(){
    let shoppingCart = ['apple', 'banana', 'orange'];
    console.log(shoppingCart);
    let newItem = 'grapes';
    shoppingCart.push(newItem);
    console.log(shoppingCart);
  }

  // Pop...
  methodPop(){
    let shoppingBooks = ['book 1','book 2','book 3','book 4'];
    console.log(shoppingBooks);
    let removeBook = shoppingBooks.pop();
    console.log("Removed element",removeBook);
    console.log("remained",shoppingBooks);    
  }

  // Slice...

  methodSlice(){
    let tasks = ['task 1',' task 2','task 3','task 4','task 5'];
    let selectedTasks = tasks.slice(-3);
    console.log(selectedTasks);
    console.log(tasks);
  }

  // Flst...

  methodFlat(){
    let nestedArray = [[1, 2],[3, 4],[5, 6],[7,8,9]];
    let flatenedArray = nestedArray.flat();
    console.log(flatenedArray);
    
  }

  // FlatMap...

  methodFlatMap(){
    let sentenses = ["hello world","how are you","i am fine"];
    let mappedSentenses = sentenses.flatMap(sentense => {
      return sentense.split("");
    });
    console.log(sentenses);
    console.log(mappedSentenses);
  }

  // Splitstring...

  originalString:string = "Hello, World";
  methodSplitString(){
    let substr : string[] = this.originalString.split(',');
    console.log(substr);
    
  }
  // replaceString...
  methodReplaceString(){
    let newStr : string = this.originalString.replace("World","Universe");
    console.log(newStr);
  }
  // repeatString...
  methodRepeatString(){
    let repeatedStr : string = this.originalString.repeat(3);
    console.log(repeatedStr);
    
  }
  // trimString...
  methodTrimString(){
    let trimString : string = this.originalString.trim();
    console.log(trimString);
  }
  // toUpperCase...
  methodToUpperCase(){
    let upperCaseStr : string = this.originalString.toUpperCase();
    console.log(upperCaseStr);
  }
  // getSubstring...
  methodGetSubstring(){
    let subString : string = this.originalString.substring(8,12);
    console.log(subString);
  }
  // getCharAt...
  methodGetCharAt(){
    let getCharAt : string = this.originalString.charAt(8);
    console.log(getCharAt);
  }
  // checkStartsWith...
  checkStartsWith(){
    let checkStart : boolean = this.originalString.startsWith("Hello");
    console.log(checkStart);
  }
  // checkEndsWith...
  checkEndsWith(){
    let checkEnd : boolean = this.originalString.endsWith("World");
    console.log(checkEnd);
    
  }
  // findIndexOf...
  findIndexOf(){
    let indexOf : number = this.originalString.indexOf('W');
    console.log(indexOf);
    
  }
  // findLastIndexOf...
  findLastIndexOf(){
    let lastIndex : number = this.originalString.lastIndexOf('l');
    console.log(lastIndex);
    
  }
  // findSearch...
  findSearch(){
    let findSearch : number = this.originalString.search("World");
    console.log(findSearch);
    
  }
  // findMatch...
  findMatch(){
    let findMatch : any = this.originalString.match(/Hello/g);
    console.log(findMatch);
    
  }
}
