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

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(5, 5);
console.log('addAndMultiplyBy5 Exercise: ' + addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 10);
console.log('multiplyAndDivideBy5 Excercise: ' + multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var  subtractTwoNumbersResult = subtractTwoNumbers(10, 10);
console.log('subtractTwoNumbers Excercise: ' + subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(2);
console.log('getCircleCircumference Excercise: ' + getCircleCircumferenceResult);

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var returnFullNameResult = returnFullName('Janelle', 'Gatmaitan');
console.log('returnFullName Excercise: ' + returnFullNameResult);

function cubeNumber(number) {
  return Math.pow(number, 3);
}

var cubeNumberResult = cubeNumber(2);
console.log('cubeNumber Excercise: ' + cubeNumberResult);

function returnMathSentence(num1, num2) {
  return 'If you add ' + num1 + ' and ' + num2 + ' together you get ' + addTwoNumbers(num1, num2);
}

var returnMathSentenceResult = returnMathSentence(10,5);
console.log('returnMathSentence Excercise: ' + returnMathSentenceResult);
