
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
    // Function to save user input in local storage
    function saveUserInput() {
      var timeBlock = $(this).parent(); // Get the parent time-block element
      var id = timeBlock.attr("id"); // Get the id of the time-block
      var userInput = timeBlock.find("textarea").val(); // Get the user input from the textarea
  
      localStorage.setItem(id, userInput); // Save the user input in local storage
    }
  
    // Add click event listener to save buttons
    $(".saveBtn").on("click", saveUserInput);
  
    // Function to update time-block classes based on current hour
    function updateTimeBlocks() {
      var currentHour = dayjs().format("H"); // Get the current hour in 24-hour format
  
      $(".time-block").each(function() {
        var timeBlock = $(this);
        var id = timeBlock.attr("id");
        var hour = id.split("-")[1]; // Extract the hour value from the id
  
        // Add or remove classes based on the comparison with the current hour
        if (hour < currentHour) {
          timeBlock.removeClass("present future").addClass("past");
        } else if (hour === currentHour) {
          timeBlock.removeClass("past future").addClass("present");
        } else {
          timeBlock.removeClass("past present").addClass("future");
        }
      });
    }

    function updatePastTime() {
        var pastTime = dayjs().format("HH"); // Get the current time in HH:mm:ss format
        var pastTimeElements = document.querySelectorAll(".past .hour"); // Get the elements with class "col-2"
      
        for (var i = 0; i < pastTimeElements.length; i++) {
          var pastTimeElement = pastTimeElements[i];
          pastTimeElement.textContent = pastTime -1; // Set the content of each element to the current time
        }
      }
      
      // Call the function to update the current time initially
      updatePastTime();
      
      // Call the function every second to continuously update the current time
      setInterval(updatePastTime, 1000);
    

    function updateCurrentTime() {
        var currentTime = dayjs().format("HH"); // Get the current time in HH:mm:ss format
        var currentTimeElements = document.querySelectorAll(".present .hour"); // Get the elements with class "col-2"
      
        for (var i = 0; i < currentTimeElements.length; i++) {
          var currentTimeElement = currentTimeElements[i];
          currentTimeElement.textContent = currentTime; // Set the content of each element to the current time
        }
      }
      
      // Call the function to update the current time initially
      updateCurrentTime();
      
      // Call the function every second to continuously update the current time
      setInterval(updateCurrentTime, 1000);
      
       
       
       function updateFutureTime() {
        var futureTime = dayjs().format("HH"); // Get the current time in HH:mm:ss format
        var futureTimeElements = document.querySelectorAll(".future .hour"); // Get the elements with class "col-2"
      
        for (var i = 0; i < futureTimeElements.length; i++) {
          var futureTimeElement = futureTimeElements[i];
          futureTimeElement.textContent = parseInt(futureTime) +1// Set the content of each element to the current time
        }
      }
      
      // Call the function to update the current time initially
      updateFutureTime();
      
      // Call the function every second to continuously update the current time
      setInterval(updateFutureTime, 1000);
    
    
  
    // Function to retrieve saved user input from local storage and set textarea values
    function retrieveUserInput() {
      $(".time-block").each(function() {
        var timeBlock = $(this);
        var id = timeBlock.attr("id");
        var savedInput = localStorage.getItem(id); // Get the saved user input
  
        // Set the textarea value to the saved input
        timeBlock.find("textarea").val(savedInput);
      });
    }
  
    retrieveUserInput(); // Call the function to retrieve saved user input
  
    // Function to display the current date in the header
    function displayCurrentDate() {
      var currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDate);
    }
  
    displayCurrentDate(); // Call the function to display the current date
  });
  



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
   
