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
          nights: [1, 5]
        },
        hostel: {
          people: [1],
          price: 30,
          nights: [1, 10]
        },
        motel: {
            people: [2, 4],
            price: 90,
            nights: [3, 10]
        },
        house: {
            people: [1, 4],
            price: 240,
            nights: [2, 15]
        },
        mealOptions: {
          hotel: 'Egg Sandwiches With Potato Salad: $24.00',
          hostel: 'Exotic Student Community Beef Stew: $6.00',
          motel: 'Cereal & Toast With Instand Coffee: $12.00',
          house: 'Root Veges With Pasta & Meat Sauce: Free'
        }
      }

      // This is for data storage
      var cloudObject= {
      };

    // A click function that sends user name input data to the cloudObject
    $('#firstClick').click(function () {
      // Get the value
      var getNameVal = $("#fullname").val();
      console.log(getNameVal);
      // Here we send the val to the cloud Object
      // and make a new property called nameInfo
      cloudObject.nameInfo = getNameVal

      console.log(cloudObject);

      console.log('First Click Works');

      // Scroll to the dive in the selector below
      var divPosition = $('#page_two').offset();
      $('html, body').animate({scrollTop: divPosition.top}, "slow")
    });

    // A function that checks the value of the select
    // box on change or Click
    document.getElementById('numberPeople').addEventListener('change', function() {
      console.log(this.value);
      // Adding selected people to the cloudObject
      cloudObject.selectedNumberPeople = this.value
      console.log(cloudObject);
      // Call the checkPeople filtering function
      // checkPeople();
      // document.getElementById("page_one").scrollIntoView()

      // Scroll to the dive in the selector below
      var divPosition = $('#page_three').offset();
      $('html, body').animate({scrollTop: divPosition.top}, "slow")
    });

    // Tells you what the variable is; string, integer, etc
    // console.log(typeof people);

    // function checkPeople () {
    //   // Changes var people to an integer/ number
    //   var people = parseInt(cloudObject.selectedNumberPeople);
    //   //Console log var people and identify the type
    //   console.log(people + ' is selected')
    //   // console.log(typeof people);
    //   //Checks whether the values within the data object are numerical
    //   // console.log(typeof data.hotel.people[1]);
    //   // Hotel
    //   // Filter checks if data is below 2
    //   // if (people <= data.hotel.people[1]) {
    //   //   // Flag to check for infinite loop
    //   //   console.log('Hotel');
    //   //    alert('You can stay at the Hotel')
    //   // }

    //   // // Hostel
    //   // // Filter checks if data is 1
    //   // if (people == data.hostel.people[0]) {
    //   //   console.log('Hostel');
    //   //   alert('You can stay at the Hostel')
    //   // }

    //   // // Motel
    //   // // Filter checks if data is between 2-4
    //   // if (people >= data.motel.people[0] && people <= data.motel.people[1]) {
    //   //   console.log('Motel');
    //   //   alert('You can stay at the Motel')
    //   //  }

    //   //  // House
    //   //  // Filter checks if data is between 1-4
    //   // if (people >= data.house.people[0] && people <= data.house.people[1]) {
    //   //   console.log('House');
    //   //   alert('You can stay at the House')
    //   // }
    // } //checkPeople ENDS

    document.getElementById('numberNights').addEventListener('change', function() {
      resetAccom();
      console.log(this.value);
      // Adding selected people to the cloudObject
      cloudObject.selectedNumberNights = this.value
      console.log(cloudObject);
      // Call the checkPeople filtering function
      checkNights();
    });

    function checkNights () {
      // Changes var people to an integer/ number
      var people = parseInt(cloudObject.selectedNumberPeople);
      // Changes var nights to an integer/ number
      var nights = parseInt(cloudObject.selectedNumberNights);
      // Console log var nights and identify the type
      console.log(nights + ' is selected')
      // console.log(typeof nights);

      // Scroll to the dive in the selector below
      var divPosition = $('#page_four').offset();
      $('html, body').animate({scrollTop: divPosition.top}, "slow")

      // Hotel
      // Filter checks if data is below 2
      if ((nights >= data.hotel.nights[0] && nights <= data.hotel.nights[1]) && (people <= data.hotel.people[1])) {
        console.log('Hotel');
         alert('You can stay at the Hotel')
         getAccomodation(1)
      }

      // Hostel
      // Filter checks if data is 1
      if ((nights >= data.hostel.nights[0] && nights <= data.hostel.nights[1]) && ((people == data.hostel.people[0]))) {
        console.log('Hostel');
        alert('You can stay at the Hostel')
        getAccomodation(2)
      }

      // Motel
      // Filter checks if data is between 2-4
      if ((nights >= data.motel.nights[0] && nights <= data.motel.nights[1]) && ((people >= data.motel.people[0] && people <= data.motel.people[1]))) {
        console.log('Motel');
        alert('You can stay at the Motel')
        getAccomodation(3)
       }

       // House
       // Filter checks if data is between 1-4
      if ((nights >= data.house.nights[0] && nights <= data.house.nights[1]) && ((people >= data.house.people[0] && people <= data.house.people[1]))) {
        console.log('House');
        alert('You can stay at the House')
        getAccomodation(4)
      }
    } //checkNights ENDS

function getAccomodation (number) {

    // Hotel
    if (number === 1) {
      $('.option-a').show(1000)
    }

    // Hostel
    if (number === 2) {
      $('.option-b').show(1000)
    }

    // Motel
    if (number === 3) {
      $('.option-c').show(1000)
    }

    // House
    if (number === 4) {
      $('.option-d').show(1000)
    }
} // getAccomodation ENDS

function resetAccom () {
      $('.option-a').hide(1000)
      $('.option-b').hide(1000)
      $('.option-c').hide(1000)
      $('.option-d').hide(1000)
}
})();
