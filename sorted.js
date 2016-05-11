//Free Code Camp Intermediate Algorithm Challenge "Sorted Union"
//This one was tough. I thought that I could just simply mash 
//all of the arrays together and just sort through three arrays
//rather than two like I did in an earlier challenge. 
//The trick is though, that you have to assume that there are 
//more than two arrays. There could be three, or four, or even arrays
//in arrays, which gives you multiple outlets to sort through. 
//The solution? For loops baby. 

function uniteUnique(arr1, arr2, arr3) {
 var mergedArray = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var h = 0; h < arrayArguments.length; h++) {
      var indexValue = arrayArguments[h];

      
      if (mergedArray.indexOf(indexValue) < 0) {
        mergedArray.push(indexValue);
      }
    }
  }

  return mergedArray;

}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);