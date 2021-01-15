var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);

console.log('Array length ' + languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated array');
console.log(languagesArray);

languagesArray.pop();
console.log('last index removed');
console.log(languagesArray);

languagesArray.splice(0, 0, 'c++');
console.log('added element to front');
console.log(languagesArray);

languagesArray.splice(0,1);
console.log('removed first element');
console.log(languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray ' + thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of the array is ' + arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the arry is ' + lastItem);
