"use strict";
var enums_1 = require('./enums');
var shelf_1 = require('./shelf');
function GetAllBooks() {
    var books = [
        { id: 1, title: "IT", author: "Stephen King", available: true, category: enums_1.Category.Fiction },
        { id: 2, title: "A farewell to Armss", author: "Ernest Hemingway", available: false, category: enums_1.Category.Poetry },
        { id: 3, title: "Where the red fern grows", author: "I forgot", available: true, category: enums_1.Category.Fiction },
        { id: 4, title: "Test", author: "Test Author", available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    //var that = this; 
    var numBooks = books.length;
    var firstAvailable = '';
    var firstAvailableAuthor = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            firstAvailableAuthor = currentBook.author;
            break;
        }
    }
    console.log("Number of books:" + numBooks);
    console.log("Title of first Available book:" + firstAvailable + " by " + firstAvailableAuthor);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting books for Category: " + enums_1.Category[categoryFilter]);
    var books = GetAllBooks();
    var bookResults = [];
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var book = books_2[_i];
        if (book.category === categoryFilter)
            bookResults.push(book.title);
    }
    return bookResults;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log("Title: " + title);
    }
}
function GetBookByID(id) {
    var bookResult = GetAllBooks();
    return bookResult.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerId(name, id) {
    return "Name: " + name + " ID: " + id.toString();
}
function CreateCustomer(name, age, city) {
    console.log("Name: " + name);
    if (age)
        console.log("Age: " + age.toString());
    if (city)
        console.log("City: " + city);
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all book by a particular author
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var book = allBooks_1[_i];
            if (book.author == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get all book titles based on availability
        for (var _a = 0, allBooks_2 = allBooks; _a < allBooks_2.length; _a++) {
            var book = allBooks_2[_a];
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
/*********************************************************** */
/******** Sample code to test our application ************** */
/*********************************************************** */
var inventory = GetAllBooks();
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazines = [
    { title: 'test 1', publisher: 'publisher 1' },
    { title: 'test 2', publisher: 'publisher 2' }
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMag = magazineShelf.getFirst();
//this code will now fail because we have added the generic constraint
//that you have to pass a string type to the shelf function
// let numberShelf: Shelf<number> = new Shelf<number>();
// [5,10,15].forEach(num => numberShelf.add(num));
magazineShelf.printTitles();
var softwareBook = bookShelf.find('Test');
console.log(softwareBook.title + " (" + softwareBook.author + ")");
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
//# sourceMappingURL=app.js.map