$(document).ready(function () {
    // Placeholder for Luxon DateTime function
    var dateTime = luxon.DateTime

    // Adds current day to header
    dayHeader()

    function dayHeader() {
        let currentDay = document.querySelector('#currentDay')
        currentDay.innerHTML = dateTime.local().toLocaleString()
    }

 


    // Time blocks are color coded based on past, present, future
    // When clicked, an event can be typed
    // Save button can be clicked to save the event on that time block
    // When save is clicked, the text is saved to local storage
    // When the page is refreshed the local storage persists
})


