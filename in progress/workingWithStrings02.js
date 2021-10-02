'use strict';

const airline = 'Tap Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passanger = 'JoNas';

function fixNames(name) {
  name = name.toLowerCase();
  const nameCorrected = name[0].toUpperCase() + name.slice(1);
  return nameCorrected;
}

console.log(fixNames('CrisTiaNo'));

// Comparing emails
const email = 'cmcarvalho@gmail.com';
const loginEmail = ' Cmcarvalho@Gmail.cOm \n';

function fixEmail(email) {
  email = email.toLowerCase();
  email = email.trim();
  return email;
}

console.log(fixEmail(loginEmail));
