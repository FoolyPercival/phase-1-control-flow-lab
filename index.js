function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber <= 400) {
    return 'This one is on me!'; 
  } else if (someNumber <= 2000) {
    return 'That will be twenty bucks.';
  } else if (someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someNumber > 2500) {
    return 'No can do.';
  }
  return result
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let response
  switch (tip) {
    case 'generous':
      return response = "Thank you so much.";
      break;
    case 'not as generous':
      return response = "Thank you.";
      break;
    default:
      return response = "Bye.";
      break;
  }
}