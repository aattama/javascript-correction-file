/* an object group multiple values together for example   */

/* to insert and delect  a value in a property you can code the code in this way */

/* to change the name in a property you can rewrite the code like this */

/*  WHY WE USE OBJECT
it makes our code organised  */

/* square bracket allow us to use a value when dot nation is not workink */

const product ={
    name:'ball',
    price: 1000
}
console.log (product);
console.log (product.name);
console.log (product.price);
console.log (product['name']);



product.name ='fifa football';
console.log (product);



product. newproperty= true;
console.log (product);

delete product. newproperty;
console.log (product)

const farming= {
    name: 'barcelona',
    ['delivery-time']: '3 days',
    rating:{
        stars: 4.5,
        count: 87
    },
    fun: function fuction1 () {

        console.log ('we will make it ')

    }
};
console.log (farming);
console.log (farming['name']);

/* backet notation allows us to use a properties that normally dont work with dot notation */
console.log (farming['delivery-time']);
console.log (farming.rating.count);
farming. fun ();

/* JSON
the different betweeen JSON  
and java script object is that when writing JSON  
all string must have a double quote
while in java script object all the string are written in single quote 
and JSON dont support function  */

console.log(JSON.stringify(farming));

/* to convert a JSON to a javascript you use the 
function tag know as a JSON.Parse () */

const JSONstring = JSON.stringify (farming);
console.log(JSON.parse(JSONstring));

/* LOCAL STORAGE 
is used to save code more permanently
variable storage are temporarly 
  */

/* DIFFERENT BETWEEN NULL AND UNDEFINED 
we use null when we intentionally  want something to be empty  */


/* AUTO BOXING AND OBJECT AND REFERENCES
 */

console.log ('hello'.length)
console.log ('hello'.toUpperCase())

const object1 = {message: 'hello'}

/* then lets make reference to the object1 */
const object2 = object1;
object1.message='odogwu nwoke';
console.log (object1);
console.log (object2);