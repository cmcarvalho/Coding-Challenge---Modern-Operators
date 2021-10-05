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

// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

// Practice exercice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
