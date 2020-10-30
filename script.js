$(document).ready(function () {
    // Placeholder for Luxon DateTime function
    var dateTime = luxon.DateTime

    var goalList = {
        '9:00': '',
        '10:00': '',
        '11:00': '',
        '12:00': '',
        '1:00': '',
        '2:00': '',
        '3:00': '',
        '4:00': '',
        '5:00': '',
    }

    dayHeader()
    checkTime()
    init()
    // Adds current day to header
    function dayHeader() {
        let currentDay = document.querySelector('#currentDay')
        currentDay.innerHTML = dateTime.local().toLocaleString()
    }
    
    // Compares timeblock to current time
    function checkTime() {
        let currentHour = luxon.DateTime.local().hour
        // Time blocks are color coded based on past, present, future
        
        $(".time-block").each( function(){
            var checkHour = parseInt($(this).attr('id'))
            if (checkHour < currentHour) {
                $(this).removeClass(['present', 'future']).addClass('past')
            }
            else if (checkHour === currentHour) {
                $(this).removeClass(['past', 'future']).addClass('present')
            }
            else {
                $(this).removeClass(['past', 'present']).addClass('future')
            }
        })
    }

    // Save button(.saveBtn) can be clicked to save the event on that time block
        $('.saveBtn').click(function() {
            
            // prints the value within the text next to the save button
            console.log($(this).siblings('textarea').val())
            // prints the id of the parent time block
            console.log($(this).parent().attr('id'))
            // [1]
            //when save is clicked, change the corresponding value in the array
            // then run the create local storage function    
        })
    // When save is clicked, the text is saved to local storage
    // When the page is refreshed the local storage persists
    
    // Load page, check if local storage exists for 'goalList'
        // if not, create it
        // render goals on timeblocks
        // if it does, just render the goals
    
    function init() {
        
        // when page is loaded read in local storage
        var storedGoals = localStorage.getItem('goalList')
        console.log(storedGoals)
        // if localstorage is null, create the goalList and render it
        if (!storedGoals) {
            renderGoals(goalList)
            createLocalStorage()
        } else {
        // else update the goalList to reflect local storage, then render it
            goalList = (JSON.parse(localStorage.getItem('goalList')))
            renderGoals(goalList)
        }
        // then render the list
    }
    
    function renderGoals(goalObject){
        // Receives in an object with a list of goals based on time
        // Render the list for each element with the class goal
        $(".time-block").each( function(){

            // timeBlock is assigned the <div> child element holding the time
            var timeBlock = $(this).children('div')

            // The child element holding the textarea has the text reassigned to the string held in the object at each time
            $(this).children('textarea').text(goalObject[timeBlock.text()])
        })
    }


    
    // function to initialize local storage for the starting array
    function createLocalStorage() {
        localStorage.setItem('goalList', JSON.stringify(goalList))
    }
})