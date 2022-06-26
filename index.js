const contactsOperations = require("./contacts");

// const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
 switch (action) {
  case "list":
   const result = await contactsOperations.listContacts();
   console.log(result);
   break;

  default:
   break;
  case "get":
   const contact = await contactsOperations.getContactById(id);
   console.log(contact);
   break;

  //   case "add":
  //    // ... name email phone
  //    break;

  //   case "remove":
  //    // ... id
  //    break;

  //   default:
  //    console.warn("\x1B[31m Unknown action type!");
 }
}

invokeAction({ action: "get", id: "1" });
