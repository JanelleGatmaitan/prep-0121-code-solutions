function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(4,4);
console.log('addTwoNumbers Exercise: ' + addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutes Exercise: ' + convertHoursToMinutesResult);

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

var personalizeGreetingResult = personalizeGreeting('Janelle');
console.log('personalizeGreeting Exercise: ' + personalizeGreetingResult);

function returnDataType(data) {
  return typeof(data);
}

var returnDataTypeResult = returnDataType(100);
console.log('returnDataType Exercise: ' + returnDataTypeResult);
