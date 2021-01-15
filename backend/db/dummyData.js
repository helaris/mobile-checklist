const { v4: uuidv4 } = require('uuid');

const contact = {
  "id": uuidv4(),
  "phone": "92343255",
  "email": "helari.sosi@gmail.com",
  "street": "147 Nuzum Court",
  "city": "Berlin",
  "postalCode": "14202",
  "state": "No one knows",
  "country": "Germany",
  "countryCode": "49"
}

const serviceCompany = {
  "id": uuidv4(),
  "name": "Best Service Company",
  // String contactId??
}

const Elevator = {
  "id": uuidv4(),
  "model": "Turbo 4000",
  "type": "elevator",
  "capacity": "10"
  // String contactId???
}

const Order = {
  "id": uuidv4(),
  "serviceCompanyId": serviceCompany.id,
  "elevatorId": Elevator.id,
  "contactId": contact.id,
  "orderDescription": "This Elevator needs to be fixed ASAP",
}


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

module.exports = { contact, serviceCompany, Order };

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