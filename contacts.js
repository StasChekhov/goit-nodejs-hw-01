const fs = require("fs").promises;
const path = require("path");
var ObjectID = require("bson-objectid");

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

async function removeContact(contactId) {
 const contact = await listContacts();
 const idx = contact.findIndex((item) => item.id === contactId);
 if (idx === -1) {
  return null;
 }
 const [removeContact] = contact.splice(idx, 1);
 await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
 return removeContact;
}

async function addContact(name, email, phone) {
 const contact = await listContacts();
 const newContact = { id: ObjectID(), name, email, phone };
 contact.push(newContact);
 await fs.writeFile(contactsPath, JSON.stringify(contact));
 return newContact;
}

module.exports = { listContacts, getContactById, addContact, removeContact };
