//problem 1
//var arr = [10,20,30];
////Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.
//
////Code Here
//function first(x) {
//    console.log(x[0]) ;
//}
//first(arr);

//Problem2
//var arr = [40,50,60];
//function last(a) {
//    console.log(a[2]);
//}
//last(arr);

//Problem3
//var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
////Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.
//
////Code Here
//function looper() {
//    for (var i = 0; i < family.length; i++) {
//        alert(family[i]);
//    }
//}
//looper(family);

//Problem 4

//var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

//Code Here
//function reversedLooper() {
//    for(var i = letters.length - 1; i >= 0; i--) {
//        alert(letters[i]);
//    }
//}
//reversedLooper(letters);

//problem 5

//var nums = [1,2,3,6,22,98,45,23,22,12];
////Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.
//
////Code Here
//function evenFinder() {
//    for (var i = 0; i < nums.length; i++) {
//        if(nums[i] % 2 === 0) {
//            console.log(nums[i]);
//        }
//    }
//}
//evenFinder(nums);

//problem 6  ******check with mentor**********

//var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//function divider(){
//    var evens = [];
//    var odds = [];
//    for (var i = 0; i < numbersArray.length; i++) {
//        if(numbersArray[i] % 2 === 0) {
//            evens = numbersArray[i];
//            console.log(evens);
//         //evens  = evens.push(numbersArray[i]);
//        }
//        else {
//            //   odds = odds.push(numbersArray[i]);
//            odds = numbersArray[i];
//            console.log("Odds are: "+odds);
//        }
//    }
//}
//divider(numbersArray);

//Problem 7


//Problem 8

var str = "this is my sentence";
for (var i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
