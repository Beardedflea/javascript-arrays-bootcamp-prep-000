
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
<<<<<<< HEAD
const array = [1, 2, 3];
=======
const array = [1];
>>>>>>> 3dac9bb12c6fddcac723f47cac2c9dd83670414b
element = 'foo';
  
function addElementToBeginningOfArray(array, element){
 return [(element), ... (array)];
}


function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element){
return [... (array), (element)];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
<<<<<<< HEAD
 return array[index];
=======
 (array)[1, '3'];
 (array)[2, '3'];
 (array)[3, '3'];
 return array;
>>>>>>> 3dac9bb12c6fddcac723f47cac2c9dd83670414b
}

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
 return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
<<<<<<< HEAD
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return  array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
  }
=======
}
>>>>>>> 3dac9bb12c6fddcac723f47cac2c9dd83670414b
