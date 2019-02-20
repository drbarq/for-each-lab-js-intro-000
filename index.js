
//- Define a function, `iterativeLog()`, that accepts an array. Call
// `'forEach()` on this array, and inside the callback, log each element with the format `${index}: ${element}`.

function iterativeLog(array) {
    debugger;
    array.forEach((element, index) =>  {
    console.log(`${index}: ${element}`)});
}

/*

- Define a function, `iterate`, that accepts a callback.
Within the `iterate()` function, you should initialize an array. It can contain anything you want, but make sure that it is not empty!
Call `.forEach()` on this array, passing the callback to `.forEach()`. Then return the array that you initialized.

*/

function iterate(callback) {
  var arrayTwo = ['cat', 'dog', 'fish']
  arrayTwo.forEach(callback) => {
    console.log(array)}
  }
