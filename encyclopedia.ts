import {ReferenceItem} from './classes.ts'

export default class Encyclapedia extends ReferenceItem{
    //no longer need this because we implemented a constructor with the use
    //of a paramter property
    
    //edition: number; 
    
    constructor(newTitle: string, newYear:number, public edition:number){
        super(newTitle,newYear);
    }
    
    printItem(): void{
        super.printItem(); //not required
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    
    printCitation():void{
        console.log(`${this.title} - ${this.year}`);
    }
}