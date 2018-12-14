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
    // $ ( '#addCarButton' ).on( 'click', addCarToGarage );

  }); // end document ready
  
  
//   function newCar( year, make, model, image ){
//     console.log( 'in newCar:', year, make, model, image );
//     garage.push( new Car( year, make, model, image ) );
//     return true;
//   } // end newCar
  
//   // function for adding a car to garage array
//   function addCarToGarage() {
//     displayMessage('');
//     if ( $( '#yearIn' ).val() == '' || $( '#makeIn' ).val() == '' || $( '#modelIn' ).val() == '' || $( '#imageIn' ).val() == '') {
//       // display an error message because one of the fields is empty
//       displayMessage('Please try again, there is a value missing.');
//       return false;
//     } else {
//       // use newCar function to add a car
//       newCar( $( '#yearIn' ).val(), $( '#makeIn' ).val(), $( '#modelIn' ).val(), $( '#imageIn' ).val() );
//     } // end if
//     // clear the values in html
//     $( '#yearIn' ).val( '' );
//     $( '#makeIn' ).val( '' );
//     $( '#modelIn' ).val( '' );
//     $( '#imageIn' ).val( '' );
//     showGarage();
//     // disable button if garage is full
//     if ( (garage.length) == garageFull ) {
//       $ ( '#yearIn' ).prop( 'disabled', true );
//       $ ( '#makeIn' ).prop( 'disabled', true );
//       $ ( '#modelIn' ).prop( 'disabled', true );
//       $ ( '#imageIn' ).prop( 'disabled', true );
//       $ ( '#addCarButton' ).prop( 'disabled', true );
//       displayMessage('The garage is full.');
//     } // end if
//   } // end addCarToGarage
  
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