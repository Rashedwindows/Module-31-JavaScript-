// use back tik or backtik to write multi line


const multipleLine = `This is first line
This is second line
This is third line
This is fourth line
This is fifth line

`

// console.log(multipleLine);



// multiple line old system
const name = 'Rahim';
const age = '39';
const occupation = 'intern'

//------------------------------------------- old system---------
// const final = 'this is'+ ' ' + name + ' ' + 'he is ' + ' ' + age +' ' + 'years old' + ' '+ 'his occupation is ' + ' ' + occupation;

// console.log(final);

// 


// new system with template interpolation
const final = `this is ${name} he is  ${age} years old his occupation is ${occupation}` ;

// console.log(final)




// const testName = `  this is first line
//                     this is second line
//                     this is third line
//                     this is fourth line
// `

// console.log(testName)



// ---------------------------------------------------------


const personName = 'Arif';

const roll = 23;

const hisClass = 'Nine';

const subject = 'Science';


// -------first system---------

/* 
const result = 'this is' + ' ' + personName + ' ' + 'his roll is ' + ' ' + roll + ' ' + 'he read in class ' + ' ' + hisClass + ' ' + 'his study subject is ' + ' ' + subject;

console.log(result) 
*/


// --------second system----------

// const result = `

//         this is ${personName} his roll is ${roll} he read in class ${hisClass} his study subject is ${subject}

// `

// console.log(result)




const test =`This is ${personName}.His Roll is ${roll}.He read in class ${hisClass}.His subject is ${subject}.`


console.log(test)