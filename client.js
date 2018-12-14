class Employee{
    constructor( firstName, lastName, idNumber, title, annualSalary ){
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = idNumber;
      this.title = title;
      this.annualSalary = annualSalary;
    } //end constructor
  } // end Employee class
  
  let employeeArray = [];

  $ ( document ).ready( function() {
    console.log('DOM ready');
    $ ( '#addEmployeeButton' ).on( 'click', addEmployee );

  }); // end document ready
  
  
  function newEmployee( firstName, lastName, idNumber, title, annualSalary ){
    console.log( 'in newEmployee:', firstName, lastName, idNumber, title, annualSalary );
    employeeArray.push( new Employee( firstName, lastName, parseFloat(idNumber), title, parseFloat(annualSalary) ) );
    return true;
  } // end newEmployee
  
  // function for adding a car to garage array
  function addEmployee() {
    // displayMessage('');
    if ( $( '#firstNameIn' ).val() == '' || $( '#lastNameIn' ).val() == '' || $( '#idNumberIn' ).val() == '' || $( '#titleIn' ).val() == '' || $( '#annualSalaryIn' ).val() == '') {
      // display an error message because one of the fields is empty
      displayMessage('Please try again, there is a value missing.');
      return false;
    } else {
      // use newEmployee function to add an employee
      newEmployee( $( '#firstNameIn' ).val(), $( '#lastNameIn' ).val(), $( '#idNumberIn' ).val(), $( '#titleIn' ).val(), $( '#annualSalaryIn' ).val() );
    } // end if

    // clear the values in html
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idNumberIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );

    // showGarage();
    // // disable button if garage is full
    // if ( (garage.length) == garageFull ) {
    //   $ ( '#yearIn' ).prop( 'disabled', true );
    //   $ ( '#makeIn' ).prop( 'disabled', true );
    //   $ ( '#modelIn' ).prop( 'disabled', true );
    //   $ ( '#imageIn' ).prop( 'disabled', true );
    //   $ ( '#addCarButton' ).prop( 'disabled', true );
    //   displayMessage('The garage is full.');
    // } // end if
  } // end addCarToGarage
  
//   // function to display added car in html garageList
//   function showGarage() {
//     let outputElement = $ ( '#garageList' );
//     outputElement.empty();
//     for ( car of garage) {
//       outputElement.append( '<li>' + 'Car in garage: ' + car.year + ' ' + car.make + ' ' + car.model + '<img src="' + car.image + '">'  + '</li>' );
//     } // end for of
//   } // end showGarage
  
//   // add display message function
//   function displayMessage( text ) {
//     let outputError = $ ( '#errorMessage' );
//     outputError.empty();
//     outputError.append( '<p>' + text + '</p>' );
//   }