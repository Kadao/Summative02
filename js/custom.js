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

      // This is for data storage
      var cloudObject= {


      };

    // A click function that sends user input data to the cloudObject
    $('#firstClick').click(function () {
      // Get the value
      var getNameVal = $("#fullname").val();
      console.log(getNameVal);
      // Here we send the val to the cloud Object
      // and make a new property called nameInfo
      cloudObject.nameInfo = getNameVal

      console.log(cloudObject);

      console.log('First Click Works');
    });

    // A function that checks the value of the select
    // box on change or Click
    document.getElementById('numberPeople').addEventListener('change', function() {
      console.log(this.value);
      // Adding selected people to the cloudObject
      cloudObject.selectedNumberPeople = this.value
      console.log(cloudObject);
      // Call the checkPeople filtering function
      checkPeople();
    });

    // Tells you what the variable is; string, integer, etc
    // console.log(typeof people);

    function checkPeople () {
      // Changes var people to an integer/ number
      var people = parseInt(cloudObject.selectedNumberPeople);
      //Console log var people and identify the type
      console.log(people + ' is selected')
      console.log(typeof people);
      //Checks whether the values within the data object are numerical
      console.log(typeof data.hotel.people[1]);
      // Hotel
      // Filter checks if data is below 2
      if (people <= data.hotel.people[1]) {
        // Flag to check for infinite loop
        console.log('1');
         alert('You can stay at the Hotel')
      }

      // Hostel
      // Filter checks if data is 1
      if (people == data.hostel.people[0]) {
        console.log('2');
        alert('You can stay at the Hostel')
      }

      // Motel
      // Filter checks if data is between 2-4
      if (people >= data.motel.people[0] && people <= data.motel.people[1]) {
        console.log('3');
        alert('You can stay at the Motel')
       }

       // House
       // Filter checks if data is between 1-4
      if (people >= data.motel.people[0] && people <= data.motel.people[1]) {
        console.log('4');
        alert('You can stay at the House')
      }

    } //checkPeople ENDS

    // **Revision**
    // *API revision needed
    // *Array revision needed
    // *(Two) Plugin revision needed
    // *jQuery needs to be plugged in

    // Pseudocode
    // 1. Connect click event to DOM - DONE
    // 2. Assign name value to a variable that is accessible to the whole app
    // 2. Call filter function from click event
    // 3. Run filters with alerts
    // 4. Ref data object for filters
    // 5. A new push to the repo

    })();
