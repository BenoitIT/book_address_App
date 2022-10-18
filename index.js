const contacts = document.getElementsByClassName("create-contact");
const listIcons = document.getElementsByClassName("list");
const contactList = document.getElementsByClassName("main");
const contactForm = document.getElementsByClassName("forms");
const Contact = document.querySelector("#contacts");
const closebutton = document.querySelector(".close");
//info data
const identification = document.querySelector(".identifcation");
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
    identification.style.display="none";

  });
}
listIcons[0].addEventListener("click", function clicklist(e) {
  e.preventDefault();
  contactList[0].style.display = "flex";
  contactForm[0].style.display = "none";
  contacts[0].style.color = "";
  listIcons[0].style.color = "blue";
  identification.style.display="none";
  closebutton.style.display="none";
});
//reading form data
let currentAddress = [];
submitButtom.addEventListener("click", function(e) {
  e.preventDefault();
 let savedContact = {
    id:Date.now(),
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
  console.log(savedContact.id)
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
 //setting data to local storage
  let localStorageAddresses = JSON.parse(localStorage.getItem("addresses") || "[]");
  localStorageAddresses.push(savedContact);
  localStorage.setItem("addresses", JSON.stringify(localStorageAddresses))
  console.log(localStorageAddresses)
  location.reload();
});
//displaying records
let localStorageAddresses = JSON.parse(localStorage.getItem("addresses") || "[]");
localStorageAddresses.forEach(item=>{
  const singleDiv=document.createElement('div');
  singleDiv.classList.add('single');
    const ContactImg=document.createElement('div');
    ContactImg.classList.add('contact-img');
    let span= document.createElement('span');
   span.innerText=item.firstName[0]+item.lastName[0];
   ContactImg.appendChild(span);
   const ContactName=document.createElement('div');
   ContactName.classList.add('contact-name');
   let spanText=document.createElement('span');
   spanText.innerText=item.firstName +' '+ item.lastName;
   ContactName.appendChild(spanText);
   singleDiv.appendChild(ContactImg);
   singleDiv.appendChild(ContactName);
   Contact.appendChild(singleDiv);
   //displaying extra contacts infromation
   closebutton.addEventListener('click',function(e){
    identification.style.display="none";
    closebutton.style.display="none";
    contactList[0].style.display = "flex";
   })

   singleDiv.addEventListener('click',function(e){

    //create divs to display data
    const infoDetails=document.createElement('div');
    infoDetails.classList.add('details');
    const information=document.createElement('div');
    information.classList.add('information');
    information.appendChild(closebutton);
    const details=document.createElement('div');
    details.classList.add('details-box');

    details.appendChild(closebutton);

    const Fname=document.createElement('div');
    Fname.innerText=`First Name:${item.firstName}`;
    const Lname=document.createElement('div');
    Lname.innerText=`Last Name:${item.lastName}`;
    const Nationality=document.createElement('div');
    Nationality.innerText=`Nationality:${item.nationality}`;
    const district=document.createElement('div');
    district.innerText=`District:${item.district}`;
    const  email=document.createElement('div');
    email.innerText=`Email:${item.email}`;
    const  freind=document.createElement('div');
    freind.innerText=`Freind:${item.freind}`;
    const  Phone=document.createElement('div');
    Phone.innerText=`Phone Number:${item.phone}`;
    const  memberOFfamily=document.createElement('div');
    memberOFfamily.innerText=`Members of family:${item.memberOFfamily}`;
    const  Acquaintance=document.createElement('div');
    Acquaintance.innerText=`Acquaintance:${item.Acquaintance}`;
    details.append(Fname);
    details.append(Lname);
    details.append(Nationality);
    details.append(district);
    details.append(email);
    details.append(freind);
    details.append(Phone);
    details.append(memberOFfamily);
    details.append(Acquaintance);
   console.log(details)
  information.append(details);
  console.log()
  infoDetails.append(information);
  identification.append(infoDetails);
  closebutton.style.display="block";
     contactList[0].style.display = "none";
     identification.style.display="block";
   })
 });
