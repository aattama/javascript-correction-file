/*document.body.innerHTML ='am back';
document.title= 'we will never lose';*/




/* the main function of DOM  is to change some HTML element taxt to 
javascript like for example 
document.body.innnerHTML = ' '
in this tag when a value is being placed inside this tag it will change the whole body of the 
html
same thing with 
document.title ='' this tag will change the title of the page  


you can also replace a button tag by rewritting the code in this mannner 

document.body.innerHTML= '<button> we change it </button>'*/

/* document.quaryselector tells js which part of the html to call in 
document.querySelector()*/

/* if you want to change the text inside a button with a string you can write the code in this 
mannner */

document.querySelector ('button').innerHTML='changed';
const buttonElement=document.querySelector('.js-button');
console.log(buttonElement)
/* the reaon why we use js- to clerify we use it in javascript */


/* assuming if we have two button will have to 
add class attribute to it so the code will be spacified  */

