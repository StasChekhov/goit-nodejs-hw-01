const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// TODO: задокументировать каждую функцию
async function listContacts() {
 try {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
 } catch (error) {
  console.error(error);
 }
}

async function getContactById(contactId) {
 const contact = await listContacts();
 const result = contact.find((item) => item.id === contactId);
 return result;
}

function removeContact(contactId) {
 // ...твой код
}

function addContact(name, email, phone) {
 // ...твой код
}

module.exports = { listContacts, getContactById };
