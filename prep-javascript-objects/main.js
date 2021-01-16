var person = {
  firstName: 'Remy',
  lastName: 'Ratatouille',
  hobby: 'cooking',
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: " + fullName);

person.job = 'chef';

console.log("The person's current job is: " + person.job);

person.previousJob = 'house rat';

console.log("The person's previous job is: " + person.previousJob);

console.log('The complete person object: ');

console.log(person);

var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: '2020',
};

console.log('Car info');

console.log(myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar["owner"] + ' ' + 'and I drive a ' + myCar["year"] +
  ' ' + myCar["make"] + ' ' + myCar["model"] + '.');

myCar['color'] = 'red';

console.log('My full car info:');

console.log(myCar);
