var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToBeginningOfArray(array, element){
  var altArray = [element, ...array];
  return altArray;
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}