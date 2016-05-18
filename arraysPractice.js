////Once you complete a problem, open up Chrome and check the answer in the console. DONE*******
//
//
//var arr = [10, 20, 30];
////Create a function named 'first' that is given 'arr' as the argument
//// how to give 'arr' as an argument to the function? ...> via the parameter
//
//
////and  returns the first item in the given array.
////what does it mean by first item in the give array?
//// what is the difference between first index and first item?
////firstIndex !== firstItem(item at the index )
//// array - index based. how to return a first item - (first item always has index of 0, and will never change)
////item means first indexed position
//
////Code Here
//function first(result) {
//    return result[0];
//}
//first(arr);
//
//
////Next problem DONE*******
//
//
//
//var arr = [40, 50, 60];
////Create a function named 'last' that is given 'arr' as the argument
////give 'arr'as the argument ---> via the parameter (parameter (something))
////and returns the last item in the given array.
////array is indexed - last index always will be array.length - 1
//function last(a) {
//    return a[arr.length - 1];
//}
//last(arr);
//
////Code Here
//
//
////Next Problem DONE*******
//
//
//var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
////Create a function named 'looper' that is given family as it's only argument,
//
////loops through the given array, --> how to loop? why will for loop will work? Is it because of the indexed position nature of arrays?
//
//
////and alerts every item in the array.
//
////Code Here
//function looper(rats) {
//    for (var i = 0; i < rats.length; i++) {
//        alert(rats[i]);
//    }
//}
//looper(family);
//
//
////Next problem DONE*******
//
//
//
//var letters = ['A', 'B', 'C', 'D', 'E'];
////Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.
//
////Code Here
//function reversedLooper(rats) {
//    for (var i = rats.length -1; i >= 0; i--) {
//        alert(rats[i]);
//    }
//}
//reversedLooper(letters);

//Next Problem //DONE *******


//var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12]; //DONE *******
////Write a function named evenFinder that is given nums as it's only argument
//
////and removes all values that aren't even from the given array.
//
////Code Here
//function evenFinder(evenSteven) {
//    var resultEven = [];
//    for (var i = 0; i < evenSteven.length; i++) {
//        if (evenSteven[i] % 2 === 0) {
//             resultEven.push(evenSteven[i]);
//        }
//    }
//    return resultEven;
//}
//evenFinder(nums);


//Next problem **DONE*************


//var numbersArray = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
////Write a function called divider that is given one argument, numbersArray.
////Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).

//var numbersArray = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
//function divider (numList) {
//    var resultEven = [];
//    var resultOdd = [];
//    var finalResult = [];
//    for (var i = 0; i < numList.length; i++) {
//        if(numList[i] % 2 === 0) {
//            resultEven.push(numList[i]);
//        } else {
//            resultOdd.push(numList[i]);
//        }
//
//    }
//    finalResult = [resultEven, resultOdd];
//    return(finalResult);
//}
//divider(numbersArray);

//
//
////Code Here
//
//
////Next Problem **DONE*************
//
//
//
//var getRandomArbitrary = function () {
//    return Math.floor(Math.random() * (30 - 0) + 0);
//};
// var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

//Code Here

var getRandomArbitrary = function () {
    return Math.floor(Math.random() * (30 - 0) + 0);
};

var number = getRandomArbitrary();
console.log("random number is:" + number);

var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function finder(arr) {

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return true;
        } else {
            return false;
        }
}

}
finder(numbers);
//
////Code Here
//
//
////Next problem ***DONE******
//
//
//
////var str = 'this is my sentence';
//////Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed
////
//////Code Here
////
////for (var i = str.length - 1; i >= 0; i--) {
////    return str;
////}
//
//
////Next Problem ****DONE****
//
//
//var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
///*
//  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
//  and adding new items to our list.
//
//  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
//  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
//  remove that item from the your grocery list and return the new, updated grocery list.
//
//  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
//  and the second is an item to add to your grocery list. In addItem add the item you passed in to
//  myGroceryList then return the new, updated grocery list.
//
//  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
//*/
//
////Code Here
//var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//
//function removeItem(list,itemToRemove) {
//    for (var i = 0; i < list.length; i++) {
//        if (list[i] === itemToRemove ) {
//            list.splice(i,1);
//            i--;
//        }
//
//    }
//    return list;
//
//
//}
//removeItem(myGroceryList,"chips");
//
////removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
////addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
//
//var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//
//function addItem(list,itemToAdd) {
//    list.push("jerky");
//}
//
//addItem(myGroceryList,"Jerky");
//console.log(myGroceryList);
//
//
//
////Next Problem ***DONE*******
//
//
//
////Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
//
////Code Here
//function fillNumber() {
//    var result = [];
//    for (var i = 0; i <= 215; i++) {
//        result.push(i);
//    }
//    console.log (result);
//}
//fillNumber();
//
//
////Next Problem ******DONE*********
//
//
//var numbers = [5, '9', 16, 19, '25', '34', 48];
////Write a function called addTen that is given 'numbers' as it's only argument and returns a new
////array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
//
////Code Here
//var numbers = [5, '9', 16, 19, '25', '34', 48];
//var allNumbers = numbers.map(Number);
////console.log(allNumbers);
//function addTen() {
//    var result = [];
//    for (var i = 0; i < allNumbers.length; i++) {
//        result.push(allNumbers[i]+10); //THIS WAS BET
//    }
//    console.log(result);
//}
//addTen(numbers);
//
//
////Next Problem ***DONE***
//
//
//
//var num1 = Math.floor(Math.random() * (30 - 0) + 0);
//var num2 = Math.floor(Math.random() * (30 - 0) + 0);
//var arr1 = [];
//var arr2 = [];
//for (var i = 0; i < num1; i++) {
//    arr1.push(i);
//}
//for (var i = 0; i < num2; i++) {
//    arr2.push(i);
//}
////Above is some code that adds a random number of values to both arr1 and arr2.
////Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.
//
////Code Here
//function longer(firstArr,secArr) {
//    if(firstArr.length > secArr.length) {
//        return arr1;
//    } return arr2;
//}
//longer(arr1,arr2);
//
//
///*As a continuation of the previous problem, write another function called 'both'.
//  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
//  'both' should return a new array with the matching numbers found in both arr1 and arr2.
//  Example: ; newArray // [2,4]
//*/
//var arr1 = [1,2,3,4];
//var arr2 = [2,4,5,6];
////Code Here
//function both(x,y){
//    var arr3 = [];
//    for(var i = 0; i < x.length; i++) {
//        for(var j = 0; j < y.length; j++) {
//            if(arr1[i] === arr2[j]) {
//                arr3.push(arr1[i],arr2[j]);
//
//            }
//        }
//    }
//    console.log(arr3);
//}
//both(arr1,arr2);
//
//
//
//
////NEXT PROBLEM ****DONE****
//
//
//
//
//var devMountainEmployees = [];
//
//var tyler = {
//    name: 'Tyler',
//    position: 'Lead Instructor/Engineer',
//    spiritAnimal: 'Honey Badger'
//};
//
//var cahlan = {
//    name: 'Cahlan',
//    position: 'CEO',
//    spiritAnimal: 'butterfly'
//};
//
//var ryan = {
//    name: 'Ryan',
//    position: 'Marketing',
//    spiritAnimal: 'fox'
//};
//
//var colt = {
//    name: 'Colt',
//    position: 'Everything really',
//    spiritAnimal: 'Young Male Horse'
//};
//
///*Above you're given an empty array with four objects. Fill the devMountainEmployees
//array with those four objects. After that console.log the length of the Array and make
//sure that it's equal to 4. */
//
////Code Here
//var devMountainEmployees = [tyler,cahlan,ryan,colt];
//console.log(devMountainEmployees.length);
//
//
///*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
//Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/
//
////Code Here
//var devMountainEmployees = [tyler,cahlan,ryan,colt];
//
//var result =[];
//for (var i = 0; i < devMountainEmployees.length; i++) {
//    if(devMountainEmployees[i].name === "Cahlan") {
//        result.push(devMountainEmployees.splice(i,1));
//    }
//}
//console.log(result);
//
//
//
//
////NEXT PROBLEM
//
//
//
//
///*Now we're going to combine what we've learned today (objects) with what we learned
//yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
//Let's think back to our itunes example (tylermcginnis.com/itunes).
//Notice that when you type in an artist name, iTunes gives us back a LOT of data.
//What they're really giving us is an Array full of Objects. It probably looks something
//like this. */
//
//var data = [
//    {
//        artist: 'shakira',
//        album: 'hips don\'t lie',
//        tracks: 16
//    },
//    {
//        artist: 'shakira',
//        album: 'mariposa',
//        tracks: 12
//    },
//    {
//        artist: 'shakira',
//        album: 'greatest hits',
//        tracks: 19
//    }
//];
//
//
//
///*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
//of Data is to have an Array full of objects. */
//
////Create an empty array called users.
//
////Code Here
//var users = [
//    {
//        name: "ratas",
//        email: "ratas.gmail.com",
//        password: "loveGit",
//        username:"gitlover"
//    },
//    {
//        name: "catas",
//        email: "catas.gmail.com",
//        password: "loveNode",
//        username:"nodelover"
//    },
//
//    {
//        name: "dogos",
//        email: "dogos.gmail.com",
//        password: "loveAJS",
//        username:"AJSlover"
//    }
//
//];
//
///*Now add three user objects to your users array. Each user object should contain the
//following properties. name, email, password, username.*/
//
////include this as one of the objects in your array.
//var user1 = {
//    name: 'Tyler McGinnis',
//    email: 'tylermcginnis33@gmail.com',
//    password: 'iLoveJavaScript',
//    username: 'infiniateLoop'
//};
//
////Your Code Here
//users.push(user1);
//
//
///*Now you have a very common data structure. Twitter is a good use case.
//It's easy to imagine that your followers list on Twitter is an Array full or objects
//and those objects contain properties about the specific person you follow.*/
//
///*Now let's say that Tyler decided to delete his account. Loop through your array of
//objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
//Once you find the particular index he's located in, delete him from the array.*/
//
////Code Here
//
////The activity we just did is very much how data works in 'the real world'.
