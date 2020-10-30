$(document).ready(function () {
    // Placeholder for Luxon DateTime function
    var dateTime = luxon.DateTime

    // Initial list of goals
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

        $(".time-block").each(function () {
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

    function init() {

        // when page is loaded read in local storage
        var storedGoals = localStorage.getItem('goalList')
        // if localstorage is null, create goalList locally and render it
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

    // Save button(.saveBtn) can be clicked to save the event on that time block
    $('.saveBtn').click(function () {

        // Grabs the value within the textarea next to the save button
        var userInput = $(this).siblings('textarea').val().trim()
        // Grabs the id of the parent time block
        var rowId = $(this).parent().attr('id')

        // Uses the calculateRow function to change the id to the time, and adjust the value at that index
        goalList[calculateRow(rowId)] = userInput

        // Then recreate the localstorage to save the new goal
        createLocalStorage()
    })

    function renderGoals(goalObject) {
        // Receives in an object with a list of goals based on time
        // Render the list for each element with the class time-block
        $(".time-block").each(function () {

            // timeBlock is assigned the <div> child element holding the time
            var timeBlock = $(this).children('div')

            // The child element holding the textarea has the text reassigned to the string held in the object at the index provided. Which is the text of the time-block element
            $(this).children('textarea').text(goalObject[timeBlock.text()])
        })
    }



    // function to initialize local storage for the starting array
    function createLocalStorage() {
        localStorage.setItem('goalList', JSON.stringify(goalList))
    }

    // Gets passed in a row id and returns the time based on the value
    function calculateRow(row) {
        switch (row) {
            case '9':
                return '9:00';
            case '10':
                return '10:00';
            case '11':
                return '11:00';
            case '12':
                return '12:00';
            case '13':
                return '1:00';
            case '14':
                return '2:00';
            case '15':
                return '3:00';
            case '16':
                return '4:00';
            case '17':
                return '5:00';
        }
    }
})