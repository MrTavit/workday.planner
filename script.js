$(document).ready(function () {
    // Placeholder for Luxon DateTime function
    var dateTime = luxon.DateTime

    dayHeader()
    checkTime()
    
    // Adds current day to header
    function dayHeader() {
        let currentDay = document.querySelector('#currentDay')
        currentDay.innerHTML = dateTime.local().toLocaleString()
    }
    
    // Compares timeblock to current time
    function checkTime() {
        let currentHour = luxon.DateTime.local().hour
        // Time blocks are color coded based on past, present, future
        
        $(".goal-box").each( function(){
            var checkHour = parseInt($(this).attr('id'))
            // console.log(this)
            // console.log(checkHour)
            // console.log(currentHour)
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

    // When a goal field is clicked, a text box appears that can be typed into
    $(".goal").click(function() {
        
        // Set the text 
        var text = $(this).text()
        // console.log(this)

        // Creates a text input form
        var input = $('<textarea>').addClass('form-control').val(text)
        // console.log(text)
        // console.log(input)


        // Changes the clicked field's html to the input 
        $(this).html(input)
        // Allows the new text box to be the focus for keyboard input when created
        input.trigger('focus')

    })
    // Save button can be clicked to save the event on that time block
    // When save is clicked, the text is saved to local storage
    // When the page is refreshed the local storage persists
})


