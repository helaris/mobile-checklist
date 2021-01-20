const { v4 } = require("uuid");

// Stateful DataBase

const contacts = [];
const serviceCompanies = [];
const elevators = [];
const orders = [];
const checklists = [];
const questions = [];
const answers = [];

// Contact {
// 	UUID id,
// 	String phone,
// 	String email,
// 	String street,
// 	String city,
//     String postalCode,
//     String state,
//     String country,
//     String countryCode
// }

// What you get from the front end ::
const contact1info = {
  phoneNr: "+47 935 35 312",
  email: "fixerman@gmail.com",
  address: "Mellony Lane 42",
  City: "Berlin",
  postalCode: "46162",
  state: "Berlin",
  country: "Germany",
  countryCode: "52",
};

const createContact = (contactObject) => ({ ...contactObject, id: v4() });

// create serviceCompany
// create eleveator
// create orders
// create checklists
// create questions
// create answers

const contact1 = createContact(contact1info);
console.log(contact1);

// Function accepts the all the current contacts,  and the contact to be added.
// Returns the contacts with the new contact added
const addNewContact = (contacts, newContact) => [...contacts, newContact];

// Actions needed from the frontend

// Fetch all contacts

// Add Contact?
// Add Service Company?
// Add elevator?

// Contact {
// 	UUID id,
// 	String phone,
// 	String email,
// 	String street,
// 	String city,
//     String postalCode,
//     String state,
//     String country,
//     String countryCode
// }
// ServiceCompany {
// 	UUID id,
// 	String name,
// 	String contactId
// }
// Elevator {
// 	UUID id,
// 	String model,
// 	String type,
// 	String capacity
// 	String contactId
// }
// Order {
// 	UUID id,
//     String externalId,
//     String serviceCompanyId,
// 	String elevatorId,
// 	String contractId,
//     String description,
//     Enum status, /* (PENDING, STARTED, COMPLETED) */
//     LocalDate dueDate,
//     LocalDateTime actualStartTime,
//     LocalDateTime actualEndTime,
//     Checklist checklistId
// }
// Checklist {
// 	UUID id,
// 	Map<Integer, UUID> sequenceMap, /* Map of question number vs question UUID, to create sequences for each checklist */
// 	Map <UUID, Answer> answerMap, /* Map of questionId and answerId, the recorded answers */
// 	Map <UUID, Answer> expectedAnswerMap, /* Map of questionId and answerId, the expected answers for validation */
// 	Integer completionCount, /* Questions completed or answered */
// 	Boolean isSigned
// }
// Question {
// 	UUID id,
// 	String description,
// 	Enum questionType /* YESNO, INPUT, MCQ */
// }
// Answer {
// 	UUID id,
// 	Enum questionType,
// 	String input,
// 	Integer errorThreshold
// }
