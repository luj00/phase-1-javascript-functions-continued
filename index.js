// Define saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  