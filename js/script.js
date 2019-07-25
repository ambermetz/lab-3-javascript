class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }

  print() {
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("David Metz", "davemetz@gmail.com", "555-555-5000", "Husband");
addressBook.add("Mark Jemson", "mjemson@gmail.com", "555-555-5555", "Dad");
addressBook.add("Jackie Jemson", "jjemson@gmail.com", "555-555-5551", "Mom");
addressBook.add("Sara Dalipi", "sdalipi@gmail.com", "555-555-5552", "Sister");
addressBook.add("Amanda Hohnke", "ahohnke@gmail.com", "555-555-5553", "Sister");
addressBook.add("Greg Jemson", "gjemson@gmail.com", "555-555-5554", "Brother");
addressBook.delete("Jackie Jemson");
addressBook.print();
