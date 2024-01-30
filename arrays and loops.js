/* arrays represent list of other value  */
const myArry=[10, 20, 30];

console.log(myArry);

myArry [0]
console.log (myArry[0]);
/* to call an array you can call an are my 
using the numbers 0, 1, 2, 3 */

myArry[0] =99;
console.log(myArry)

/* inside an array you can put any
 type of value  */

 

 /* to check whether if an element is an array
  youn can do that by isArray for example  */

  console.log(typeof[1,2]);
  console.log(Array.isArray([1,2]));

  /* to know the actually value in an array you
  .length  */

  console.log(myArry.length)

  /* to add an element in an array  */
  myArry.push(1000)
  console.log(myArry)

  /* toremove an element from array */
  myArry.splice(2)
  console.log(myArry)

  /* loops  
  there are two type of loops
  while &
  for */
   let i =1
   while (i <= 5) {
    console.log(i)
i =i +1;
   }

   for (let i = 1;i <= 5; i=i + 1) {
console.log(i);
   }

   /* to loop through an array you can do it like this */
   const todolist =[
      'make dinner',
      'wash the pot',
      'clean the room'
   ];
for(let i=0; i < todolist.length; i++) {
   const value = todolist [i];
   console.log(value);
}

/*accumulator pattern allow you to create  a variable 
store the result and loop through the array and update the result */

const nums = [1, 1, 3]
let total = 0
for (let i = 0; i < nums.length; i++) {
   const num = nums [i]
   total += num;
}
console.log(total);

const numsDoubled = []

for (let i =0; i < nums.length; i++) {
   const num = nums [1]
   numsDoubled.push(num * 2)
}
console.log(numsDoubled)

/* arrays are refernces which mean that when are 
is being created it saves somewhere in computer 
memory for eg */
const array1 = [1,2,3];

/* another way of getting a variable in an array */

const [fristvalue] =[1,2,3]
console.log(fristvalue)
console.log(array1)