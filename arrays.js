var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (array, element) => var newArray = [element, ...array];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ..array]
  return newArray
}

var destructivelyAddElementToBeginningOfArray = (array, element) => array.unshift(element) return array

var accessElementInArray = (array, index) => array[index]

var destructivelyRemoveElementFromBeginningOfArray = array => array.shift() return array

var removeElementFromBeginningOfArray = array => array.slice(1)

var destructivelyRemoveElementFromEndOfArray = array => array.pop() return array

var removeElementFromEndOfArray = array => array.slice(0, array.length - 1)
