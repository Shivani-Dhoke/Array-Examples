console.log("Here are some Array Examples");
//INCLUDE:- include() method determines whether an array includes a certain value to it and returns true/false.
let myinclude = [1, 2, 3, 4];
console.log(myinclude.includes(2));
console.log(myinclude.includes(5));


// PUSH():- push()method adds a new element to an array and return a new array length(added element from last)
let myArray = [1, 2, 3, 4, 5, 6];
let count = myArray.push(7);
console.log(myArray);
console.log(count);


// POP():- pop() method removes the last element from an array 
let mypop = [11, 12, 13, 14, 15, 16];
 let ele = mypop.pop();
 console.log(mypop);
 console.log(ele);


// SHIFT():- shift()method removes first element from an array and returns that element 
let myshift = [9, 8, 7, 6, 5]
let firstEle = myshift.shift();
console.log(myshift);
console.log(firstEle);

// UNSHIFT():- unshift() method adds a new elements to beginning of array and return new length to the array 
let myunshift = [5, 6, 4, 3,];
let unshift = myunshift.unshift(1,2);
console.log(myunshift);
console.log(unshift);

// SLICE():- slice() method it return shallow copy of a portion of an array into new array object selected from starts to end(original array will not modified)
let myslice = ["Jan", "Feb", "March", "April", "May"];
console.log(myslice.slice(2));
console.log(myslice.slice(1,4)); // slice(start,end)(extract 2nd element through 4th element)
console.log(myslice.slice(-2));
console.log(myslice.slice(2,-1));

// SPLICE():- splice() method changes the content of an array by removing or replacing existing element by adding new element 
let mysplice = ["June", "July", "Sept", "Nov"]
mysplice.splice(2, 0, "Aug");
mysplice.splice(4, 1, "Oct");
mysplice.splice(0, 1, "Jan");
console.log(mysplice);

// LENGTH():- length() method returns or set the number of element of an array 
let mylength = [1, 2, 3, 4, 5]
console.log(mylength);
console.log(mylength.length);

// JOIN():- join() method joins all the element of an array to string 
let myjoin  = ["ABC", "DEF", "GHI"];
console.log(myjoin);
console.log(myjoin.join());
console.log(myjoin.join(''));
console.log(myjoin.join('-'));

// REVERSE():- reverse() method reverse the order of the element of an array 
let myreverse = [1, 2, 3, 4, 5];
console.log(myreverse);
console.log(myreverse.reverse());

// SORT():- sort() method sort the Elementof an in place and returns the array (compairing their sequence of UTF-16 code units)
let mysort = [200, 1, 11998, 678, 4, 98, 34,56];
console.log(mysort.sort());

// FILL():- fill()method fills all the element of an array from start index to an end index with static value 
let myfill = [1, 2, 3, 4, 5];
console.log(myfill);
console.log(myfill.fill(0, 2, 4)); // fill(value, start, end)
console.log(myfill.fill(8, 3, 6)); // fill(value, start, end)

// MAP():- Map() method creates a new array populate with the result of calling a provided function on every element in the calling array . The map() method calls a callback function on every element of an array and returns a new array that contains the results. 
let mymap = [2, 3, 4, 5, 6];
console.log(mymap);
let map1 = mymap.map((x) => x*2);
console.log(map1);
let map2 = mymap.map((x) => x.toString(2))//returns binary
console.log(map2);


// FILTER():- filter() method use to filter out the value inside the array and it returns matched value in an array from collection
let myfilter = [5, 1, 3, 2, 6];
// filter out odd values 
let output = myfilter.filter((x) => x%2);
console.log(output);
// filter out even numbers
let output1 = myfilter.filter((x) => x%2===0);
console.log(output1);

let output2 = myfilter.filter((x) => x>4); //x>3;
console.log(output2);

let words = ['abhdf', 'hgf', 'yuewdhj', 'pqr', 'tyudh', 'tyuiuoh'];
let result = words.filter(word => word.length > 4);
console.log(result);

//FIND():- find() method returns the first element in the provided array that satisfies the provided testing function.
let myfind = [5, 12, 8, 56, 13];
let find = myfind.find((x) => x%2===0);
console.log(find);


//TOSTRING():- toString() method returns a string representing the specified array and its element
 let mystring = ["Welcome","to", 2, 0, 2, 2];
 console.log(mystring.toString());


 //INDEXOF():- indexOf() method returns first index at which given element found in array and if it's not present then it returns -1
 let myindex = ["Apple","Orange","Banana","Orange","Grapes"];
 console.log(myindex.indexOf('Orange',2)); // (search element, from index)



 //LASTINDEXOF():- lastIndexOf() method returns last index at which given element found in array and if it's not present then it returns -1(searched backword)
 let mylastindex = ["Apple","Orange","Banana","Orange","Grapes"];
 console.log(mylastindex.lastIndexOf('Orange',2)); 



 //FOREACH():- forEach() method executes a function once for each array element
 let myforeach = [1, 2, "Hello", 4, 6];
 console.log(myforeach);
 myforeach.forEach(element => console.log(element));

 //REDUCE():- 
 let myreduce = [5, 1, 3, 2, 6];
 let routput = myreduce.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
 },0)
 console.log(routput);












