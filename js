const contacts = document.getElementsByClassName("create-contact");
const listIcons = document.getElementsByClassName("list");
const contactList = document.getElementsByClassName("main");
const contactForm = document.getElementsByClassName("forms");
const singleContact = document.getElementsByClassName("single");
const ContactImg = document.getElementsByClassName("contact-img");
const ContactName = document.getElementsByClassName("contact-name");
//get form data
let firstNameContact = document.querySelector("#Fname");
let lastNameContact = document.querySelector("#Lname");
let nationalityContact = document.querySelector("#nation");
let districtContact = document.querySelector("#district");
let emailContact = document.querySelector("#email");
let phoneContact = document.querySelector("#phone");
let memberOFfamilyContact = document.querySelector("#memberOFfamily");
let freindContact = document.querySelector("#freind");
let AcquaintanceContact = document.querySelector("#acquaint");
const submitButtom = document.getElementById("create-btn");

//changing the display of pages
for (const contact of contacts) {
  contact.addEventListener("click", function onClick(e) {
    e.preventDefault();
    contactList[0].style.display = "none";
    contactForm[0].style.display = "flex";
    contacts[0].style.color = "blue";
    listIcons[0].style.color = "";
  });
}
listIcons[0].addEventListener("click", function clicklist(e) {
  e.preventDefault();
  contactList[0].style.display = "flex";
  contactForm[0].style.display = "none";
  contacts[0].style.color = "";
  listIcons[0].style.color = "blue";
});
//reading form data
const contactsList = [];
submitButtom.addEventListener("click", function getData(e) {
  e.preventDefault();

  let savedContact = {
    firstName: firstNameContact.value,
    lastName: lastNameContact.value,
    nationality: nationalityContact.value,
    district: districtContact.value,
    email: emailContact.value,
    phone: phoneContact.value,
    memberOFfamily: memberOFfamilyContact.value,
    freind: freindContact.value,
    Acquaintance: AcquaintanceContact.value
  };
  contactsList.push(savedContact);
  contactList[0].style.display = "flex";
  contactForm[0].style.display = "none";
  contacts[0].style.color = "";
  listIcons[0].style.color = "blue";
  firstNameContact.value = "";
  lastNameContact.value = "";
  nationalityContact.value = "";
  districtContact.value = "";
  emailContact.value = "";
  memberOFfamilyContact.value = "";
  phoneContact.value = "";
  freindContact.value = "";
  AcquaintanceContact.value = "";
});
console.log(contactsList);
//saving collected records into local storage
window.localStorage.setItem('savedData',JSON.stringify(contactsList));
window.localStorage.getItem('savedData');
//looping contacts
contactsList.forEach(item=>{
  console.log("IIII", item)
})

