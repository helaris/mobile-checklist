const { v4 } = require("uuid");

// Stateful DataBase

let count = 0
let contacts = [];
let serviceCompanies = [];
let elevators = [];
let orders = [];
let checklists = [];
let questions = [];
let answers = [];

// Helpers

const addRandomIdToObject = (obj) => ({ ...obj, id: v4() })

// What you get from the front end ::
const contact1Data = {
  phoneNr: "+47 935 35 312",
  email: "fixerman@gmail.com",
  address: "Mellony Lane 42",
  City: "Berlin",
  postalCode: "46162",
  state: "Berlin",
  country: "Germany",
  countryCode: "52",
};

const contact2Data = {
  phoneNr: "+47 900 35 312",
  email: "memaintain@gmail.com",
  address: "Øvre Løkka 78",
  City: "Oslo",
  postalCode: "0623",
  state: "Oslo",
  country: "Norway",
  countryCode: "47",
};

const contact3Data = {
  phoneNr: "+47 933 35 312",
  email: "fixerman@gmail.com",
  address: "Mellony Lane 42",
  City: "Berlin",
  postalCode: "46162",
  state: "Berlin",
  country: "Germany",
  countryCode: "52",
};

const serviceCompany1Data = {
  name: "We fix elevators!"
}
const serviceCompany2Data = {
  name: "TW & Partners"
}
const serviceCompany3Data = {
  name: "Gert Müller & Sons"
}


const createContact = (contactObject) => ({ ...contactObject, id: v4() });
const addNewContact = (contacts, newContact) => [...contacts, createContact(newContact)];
const findContact = (id) => contacts.find(c => c.id === id);
contacts = addNewContact(contacts, contact1Data)
contacts = addNewContact(contacts, contact2Data)
contacts = addNewContact(contacts, contact3Data)

const createServiceCompany = (companyData, contactId) => ({ ...companyData, id: v4(), contact: findContact(contactId) })
const addNewServiceCompany = (serviceCompanies, newCompany, contactId) => [...serviceCompanies, createServiceCompany(newCompany, contactId)]

serviceCompanies = addNewServiceCompany(serviceCompanies, serviceCompany1Data, contacts[0].id)
serviceCompanies = addNewServiceCompany(serviceCompanies, serviceCompany2Data, contacts[1].id)
serviceCompanies = addNewServiceCompany(serviceCompanies, serviceCompany3Data, contacts[2].id)

const elevatorOneData = {
  model: "AT30C",
  type: "Electric 4000",
  capacity: "800kg",
}
const elevatorTwoData = {
  model: "Nimbus 3000",
  type: "ThunderStorm 1337",
  capacity: "800kg",
}
const elevatorThreeData = {
  model: "RockaBilly 42C",
  type: "Awesome",
  capacity: "2000kg",
}

const createElevator = (elevatorData, contactId) => ({ ...elevatorData, id: v4(), contact: findContact(contactId) })

elevators = [...elevators, createElevator(elevatorOneData, contacts[0].id)]
elevators = [...elevators, createElevator(elevatorTwoData, contacts[1].id)]
elevators = [...elevators, createElevator(elevatorThreeData, contacts[2].id)]

// Questio

const createChecklist = () => {

  let sequenceMap = new Map()
  let answerMap = new Map()
  let expectedAnswerMap = new Map()

  return {
    id: v4(),
    sequenceMap,
    answerMap,
    expectedAnswerMap,
    completionCount: 0,
    isSigned: false,
  }
}

checklists = [...checklists, createChecklist()]

// Question and answer creation functions

const createQuestion = (questionData) => addRandomIdToObject(questionData);
const createAnswer = (answerData) => addRandomIdToObject(answerData);

const questionDataOne = {
  questionType: "YESNO",
  description: "Machine Room Space Requirements",
}

const expectedAnswerDataOne = {
  questionType: "YESNO",
  expectedInput: "YES",
}

const questionDataTwo = {
  questionType: "YESNO",
  description: "Hoistway and pits",
}

const expectedAnswerDataTwo = {
  questionType: "YESNO",
  expectedInput: "YES",
}

const questionDataThree = {
  questionType: "YESNO",
  description: "Secondary and Overhead Sheave Space",
}

const expectedAnswerDataThree = {
  questionType: "YESNO",
  expectedInput: "YES",
}

const questionDataFour = {
  questionType: "YESNO",
  description: "Miscelaneous",
}

const expectedAnswerDataFour = {
  questionType: "YESNO",
  expectedInput: "YES",
}
const questionDataFive = {
  questionType: "YESNO",
  description: "Sprinkler, shunt trou and detector",
}

const expectedAnswerDataFive = {
  questionType: "YESNO",
  expectedInput: "YES",
}

const answerQuestionOne = [questionDataOne, expectedAnswerDataOne]
const answerQuestionTwo = [questionDataTwo, expectedAnswerDataTwo]
const answerQuestionThree = [questionDataThree, expectedAnswerDataThree]
const answerQuestionFour = [questionDataFour, expectedAnswerDataFour]
const answerQuestionFive = [questionDataFive, expectedAnswerDataFive]

const addQuestionToChecklist = (checklists, questionData, expectedAnswerData) => {
  const question = createQuestion(questionData)
  const expectedAnswer = createAnswer(expectedAnswerData)
  questions.push(question)
  answers.push(expectedAnswer)
  checklists[0].sequenceMap[count++] = question.id
  checklists[0].answerMap[question.id] = createAnswer({ questionType: "YESNO", input: undefined }).id
  checklists[0].expectedAnswerMap[question.id] = expectedAnswer.id
  return checklists
}

checklists = addQuestionToChecklist(checklists, answerQuestionOne[0], answerQuestionOne[1])
checklists = addQuestionToChecklist(checklists, answerQuestionTwo[0], answerQuestionTwo[1])
checklists = addQuestionToChecklist(checklists, answerQuestionThree[0], answerQuestionThree[1])
checklists = addQuestionToChecklist(checklists, answerQuestionFour[0], answerQuestionFour[1])
checklists = addQuestionToChecklist(checklists, answerQuestionFive[0], answerQuestionFive[1])

const orderDataOne = {
  externalId: "",
  serviceCompanyId: serviceCompanies[0].id,
  elevatorId: elevators[0].id,
  contractId: "123",
  description: "Contract for maintenance",
  dueDate: "12-04-21",
  checklistId: checklists[0].id
}

createOrder = (orderData) => ({
  ...orderData, id: v4(),
  status: 'PENDING',
  actualStartTime: Date.now(),
  actualEndTime: "",
})


// Function to count how many answers has been filled out, ee.g
// how many have input defined is TO BE implemented.
console.log(checklists[0])
// All questions will be made with an expected answer
//

module.exports = { contacts, checklists, answers, questions, elevators, serviceCompanies };

// create checklists
// create questions
// create answers


// Function accepts the all the current contacts,  and the contact to be added.
// Returns the contacts with the new contact added


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
