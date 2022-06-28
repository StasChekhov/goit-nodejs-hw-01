const contactsOperations = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
 .option("-a, --action <type>", "choose action")
 .option("-i, --id <type>", "user id")
 .option("-n, --name <type>", "user name")
 .option("-e, --email <type>", "user email")
 .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
 switch (action) {
  case "list":
   const result = await contactsOperations.listContacts();
   console.log(result);
   break;

  case "get":
   const contact = await contactsOperations.getContactById(id);
   console.log(contact);
   break;

  case "add":
   const newContact = await contactsOperations.addContact(name, email, phone);
   console.log(newContact);
   break;

  case "remove":
   const removeContact = await contactsOperations.removeContact(id);
   console.log(removeContact);
   break;

  default:
   console.warn("\x1B[31m Unknown action type!");
 }
}
invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1" });
// invokeAction({ action: "add", name: "Stas", email: "myEmail", phone: "0123" });
// invokeAction({ action: "remove", id: "62b9fe577fc18f230976616e" });
