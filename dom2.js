function handlekeydown (event) {
  if (event.key === 'Enter') 
  {calculateTotal ();}
  }

function subscribe () {
    const buttonElement=document.querySelector('.js-subscribe-button');
    
    if (buttonElement.innerHTML=== 'subscribe') {
     buttonElement.innerHTML= 'subscribed';
     buttonElement.classList.add ('is-subscried');
    } else {
      buttonElement.innerHTML= 'subscribe';
buttonElement.classList.remove('is-subscried')
  }

}
function calculateTotal () {

  const inputElement = document.querySelector('.js-cost-input')
  let cost = Number(inputElement.value);


if (cost < 40) {
cost = cost + 10;

}
document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}


