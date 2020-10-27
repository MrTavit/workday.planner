  // Adds current day to header
  var currentDay = document.querySelector('#currentDay')
  currentDay.innerHTML =  luxon.DateTime.local().toLocaleString()
  
  // Display blocks for standard business hours
  // 1 per hour
  // Time blocks are color coded based on past, present, future
  // When clicked, an event can be typed
  // Save button can be clicked to save the event on that time block
  // When save is clicked, the text is saved to local storage
  // When the page is refreshed the local storage persists
  
  
  
  
