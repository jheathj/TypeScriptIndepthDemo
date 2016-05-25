//import {Book, DamageLogger, Author, Librarian} from './interfaces';
import * as Interfaces from './interfaces';

class UniversityLibrarian implements Interfaces.Librarian{
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }
}

 export abstract class ReferenceItem{
     //use of static property
     static department: string = 'Research Software Engineering';
     
     //use of accessor
     private _publisher: string;
     get publisher(){
         return this._publisher.toUpperCase();
     }
     set publisher(newPublisher:string){
         this._publisher = newPublisher;
     }
     
    //constructor using parameter properties 
    constructor(public title:string, protected year:number){
        console.log('Creating a new reference item...');
    }
    
    //plain method in a class
    printItem(): void{
        //console.log('Book ' + this.title + ' written in ' + this.year);
        console.log(`${this.title} published in ${this.year}.`);
        //use of static property
        console.log(`Department: ${ReferenceItem.department}.`);
    }
       
   abstract printCitation():void; //forces subclasses to implement this method
}

export {UniversityLibrarian}