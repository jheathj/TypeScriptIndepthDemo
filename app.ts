import {Category} from './enums';
import {Book, Logger, Author, Librarian, Magazine} from './interfaces';
import {UniversityLibrarian, ReferenceItem} from './classes';
import {CalculateLateFee as CalcFee, MaxBooksAllowed, Purge} from './lib/utilityFunctions'
import refBook from './encyclopedia.ts';
import Shelf from './shelf';

function GetAllBooks(): Book[]{
    let books = [
        {id: 1, title: "IT", author: "Stephen King", available: true, category: Category.Fiction},
        {id: 2, title: "A farewell to Armss", author: "Ernest Hemingway", available: false, category: Category.Poetry},
        {id: 3, title: "Where the red fern grows", author: "I forgot", available: true, category: Category.Fiction},
        {id: 4, title: "Test", author: "Test Author", available: true, category: Category.Fiction}
    ];
    
    return books;
}

function LogFirstAvailable(books): void {
    //var that = this; 
   
    let numBooks: number = books.length;
    let firstAvailable: string = '';
    let firstAvailableAuthor: string  = ''
    for(let currentBook of books){
        
        if(currentBook.available){
            firstAvailable = currentBook.title;
            firstAvailableAuthor = currentBook.author;
            break;
        }
    }
    
    console.log("Number of books:" + numBooks);
    console.log("Title of first Available book:" + firstAvailable + " by " + firstAvailableAuthor);
}



function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): string[]{
    console.log("Getting books for Category: " + Category[categoryFilter]);
    
    var books = GetAllBooks();
    
    let bookResults: string[] = [];
    
    for(let book of books){
        if(book.category === categoryFilter)
            bookResults.push(book.title);
    }    
    
    return bookResults;
}

function LogBookTitles(titles: string[]): void{
    for(let title of titles){
        console.log("Title: " + title);
    }
}

function GetBookByID(id: number): Book {
    var bookResult = GetAllBooks();
    
    return bookResult.filter(book => book.id === id)[0]; 
}

function CreateCustomerId(name: string, id: number): string {
    return "Name: " + name + " ID: " + id.toString();
}

function CreateCustomer(name: string, age?: number, city?: string) {
    console.log("Name: " + name);
    
    if(age)
        console.log("Age: " + age.toString());
    if(city)
        console.log("City: " + city);
            
}

function GetTitles(author: string): string [];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];
    
    if(typeof bookProperty == 'string'){
        //get all book by a particular author
        for(let book of allBooks){
           if(book.author == bookProperty){
               foundTitles.push(book.title);
           } 
        }
    }
    else if(typeof bookProperty == 'boolean'){
        //get all book titles based on availability
       for(let book of allBooks){
           if(book.available == bookProperty){
               foundTitles.push(book.title);
           }
       }
    }
    return foundTitles;
} 
    
function PrintBook(book: Book):void{
    console.log(book.title + ' by ' + book.author);
}

/*********************************************************** */
/******** Sample code to test our application ************** */
/*********************************************************** */
let inventory:Array<Book> = GetAllBooks();

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    {title: 'test 1', publisher: 'publisher 1'},
    {title: 'test 2', publisher: 'publisher 2'}
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));

let firstMag = magazineShelf.getFirst();

//this code will now fail because we have added the generic constraint
//that you have to pass a string type to the shelf function
// let numberShelf: Shelf<number> = new Shelf<number>();
// [5,10,15].forEach(num => numberShelf.add(num));

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Test');
console.log(`${softwareBook.title} (${softwareBook.author})`);

// let purgedBook: Array<Book> = Purge<Book>(inventory);
// purgedBook.forEach(book => {
//     console.log(`Book: ${book.title}`);
// })

// let bookNums: Array<number> = [1,2,3,4];
// let purgedNumbs: Array<number> = Purge(bookNums);
// purgedNumbs.forEach(num => {
//     console.log(`Number: ${num}`);
// })


// let newsPaper = class extends ReferenceItem{
//     printCitation():void{
//         console.log(`Newspaper: ${this.title}`);
//     }
// }

// let myPaper = new newsPaper('Paper', 2011);
// myPaper.printCitation();

// class Novel extends class {title:string}{
//     mainCharacter:string;
// }

// let favNovel = new Novel();
// favNovel

// let refBook: ReferenceItem = new Encyclapedia('Test', 2010, 10);
// refBook.printCitation();

// let ref: ReferenceItem = new ReferenceItem('this is my new title',2015);
// ref.printItem;
// ref.publisher = 'Random data publishing';
// console.log(ref.publisher);


//let favAuthor: Author = {}
// let favLibrarian: Librarian = new UniversityLibrarian();
// favLibrarian.name = 'Heath';
// favLibrarian.assistCustomer('Holland');

// let myBook: Book = {
//     id:5,
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages: 250,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason);
// };

// PrintBook(myBook);
// myBook.markDamaged('torn pages');

// let logDamage: DamageLogger;
// logDamage = (damage:string) => console.log('Damage Reported: ' + damage);
// logDamage('torn pages');


// let heathsBooks = GetTitles("Stephen King");
// heathsBooks.forEach(bookTitle => {
//     console.log(bookTitle);
// });
// console.log("-----------------------");
// let availableBooks = GetTitles(true);
// availableBooks.forEach(bookTitle =>{
//     console.log(bookTitle);
// })
//let poetryBooks = GetBookTitlesByCategory(Category.Poetry );
//poetryBooks.forEach(title => console.log(title));
//CreateCustomer("Heath", 27);

// let x: number;
// x = 5;
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerId;

// let result = IdGenerator("Heath", 10);
// console.log(result);
//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));