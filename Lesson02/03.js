// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

class Phonebook {
  constructor() {
    this.contacts = new Map();
  }

  addContact(name, phone) {
    this.contacts.set(name, phone);
  }

  findContactByName(name) {
    if (this.contacts.has(name)) {
      return `name: ${name}, phone: ${this.contacts.get(name)}`;
    } else {
      return `This phonebook has no ${name}`;
    }
  }

  findContactByPhone(phone) {
    if (Array.from(this.contacts.values()).includes(phone)) {
      return `name: ${this.findByValue(phone)}, phone: ${phone}`;
    } else {
      return `This phonebook has no such entry`;
    }
  }

  deleteContact(name) {
    this.contacts.delete(name);
  }

  findByValue(phone) {
    return [...this.contacts].find(([key, val]) => val === phone)[0];
  }
}

let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов"));
console.log(phonebook.findContactByPhone("987-65-43"));
console.log(phonebook.contacts);
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);
console.log(phonebook.findContactByName("Иванов"));
