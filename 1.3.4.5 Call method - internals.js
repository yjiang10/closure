//Listing : call method internals

/*
 this function finds all binary numbers inside a string
 regex pattern checks digit (0 or 1) one or more times between word boundaries
 \b -> word boundary
 + -> repeat 1 or more time - you can make it lazy by +?
 [01]+ -> repeat 0 or 1 one or more time
 g -> global match
 match method -> return an array with all matches
 */

function binaryNumbers() {
    var pattern = /\b[01]+\b/g;
    //this keyword is not associated with any object
    this.result = this.subject.match(pattern);
}

//create 2 objects
var object1 = {subject:"100 1234 1010 string"};
var object2 = {subject: "1234 1112 1010 string"}

//associate this with object1
//this.result will set result property on object1
object1.method = binaryNumbers;
object1.method();
delete object1.method;


//associate this with object2
//this.result will set result property on object2
object2.method = binaryNumbers;
object2.method();
delete object1.method;

//query result property on object1
console.log(object1.result); //[ '100', '1010' ]

//query result property on object2
console.log(object2.result); // [ '1010' ]