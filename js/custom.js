// Global iffe function
(function(){
      // Data Object
      // Array data in order minimum people, max people, price, minNight, maxNight
    //   var data = {
    //    hotel: [1, 2, 157, 1, 5],
    //    hostel: [1, 1, 30, 1, 10], 
    //    motel: [2, 4, 90, 3, 10],
    //    house: [1, 4, 240, 2, 15]
    //   }
      // Another data structure version
      var data = {
        hotel: {
          people: [1, 2],
          price: 157,
          minMax: [1, 5]
        },
        hostel: {
          people: [1],
          price: 30,
          minMax: [1, 10]
        },
        motel: {
            people: [2, 4],
            price: 90,
            minMax: [3, 10]
        },
        house: {
            people: [1, 4],
            price: 240,
            minMax: [2, 15]
        },
      }
      // Hiding 'landingPage' Showing 'InputPage'
      $('#letsGetStarted').click(function () {
        $('#landingPage').hide();
        $('#inputPage').show();
      });
      // Getting Results on Button Click
      $("#getResults").click(function() {
        // Getting the input values
        var getLocationVal = $('#locationInput').val();
        var getStartDateVal = $('#startDateInput').val();
        var getEndDateVal = $('#endDateInput').val();
        var getGuestVal = $('#guestInput').val();
        // Logging variables
        console.log(getLocationVal);
        console.log(getStartDateVal);
        console.log(getEndDateVal);
        console.log(getGuestVal);
        // ** This calls the checkPeople function and runs the checkPeople filters below
        checkPeople(getGuestVal)
      }); // click ENDS
    function getName(){  
        var fullname = document.getElementById("fullname").value;  
        console.log(getName);  
        }  
      function checkPeople (people) {
        console.log(people)
        if (people > 1) {
          // this code is when hostel is ruled out..
          alert('You cannot stay at the hostel')
        }
        if (people > 2 ) {
          // this code is when hotel is ruled out..
          alert('You cannot stay at the hotel')
        }
        if (people >= 2 && people <= 4) {
          // this code is when motel is not ruled out..
          alert('You can stay at the motel')
        }
        if (people >= 1 && people <= 4) {
          // this code is when motel is not ruled out..
          alert('You can stay at the house')
        }
      } //checkPeople ENDS
// **Revision**
// *API revision needed
// *Array revision needed
// *(Two) Plugin revision needed
// *jQuery needs to be plugged in
    })();