class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  display() {
    // console.log(this.contacts);
    document.querySelector(".contact_results").innerHTML = "";
    addressBook.contacts.forEach((contact, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Relation: ${contact.relation}</p>
      <i class="fas fa-trash" index="${index}"></i>
      `;
      document.querySelector(".contact_results").append(div);
    });
  }
  delete(index) {
    this.contacts.splice(index, 1);
  }
}

function submitHandler(event) {
  event.preventDefault();
  const name = event.target[0].value;
  const email = event.target[1].value;
  const phone = event.target[2].value;
  const relation = event.target[3].value;
  addressBook.add(name, email, phone, relation);

  addressBook.display();
}

const contactResults = document.querySelector(".contact_results");
contactResults.addEventListener("click", deleteContact);

// function deleteListener() {
//   document
//     .querySelector("contact_results")
//     .addEventListener("click", deleteContact);
// }

function deleteContact(event) {
  if (event.target.classList.contains("fa-trash")) {
    const index = event.target.getAttribute("index");
    console.log(index);
    addressBook.delete(index);
    addressBook.display();
  }
}

const addressBook = new AddressBook();
document.querySelector("form").addEventListener("submit", submitHandler);
addressBook.add("Amber Metz", "amber@gmail.com", "555-555-5555", "me");
addressBook.add("David Metz", "dave@gmail.com", "555-555-5555", "Husband");
addressBook.display();
// deleteContact();
