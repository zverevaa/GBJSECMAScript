// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    return `Название книги: "${this.title}", её автор ${this.author}, она содержит  ${this.pages} страниц`;
  }
}

const book = new Book("Как устроена экономика", "Ха-Джун Чанг", 460);
console.log(book.displayInfo());
