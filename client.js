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
let tableHeaders = '<tr>' + '<th>' + 'First Name' + '</th>' + '<th>' + 'Last Name' + '</th>' + '<th>' + 'ID' + '</th>' + '<th>' + 'Title' + '</th>' + '<th>' + 'Annual Salary' + '</th>' + '</tr>';

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

    // run functions to clear the input fields and display employees
    clearInput();
    showEmployee();

  } // end addEmployee
  
    
  
function newEmployee( firstName, lastName, idNumber, title, annualSalary ){
    console.log( 'in newEmployee:', firstName, lastName, idNumber, title, annualSalary );
    employeeArray.push( new Employee( firstName, lastName, parseFloat(idNumber), title, parseFloat(annualSalary) ) );
    return true;
} // end newEmployee

// clearing the input fields
function clearInput() {
    // clear the values in html
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idNumberIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );
} // end clearInput

// function to display employees on a table
function showEmployee() {
    let outputElement = $ ( '#employeeTable' );
    outputElement.empty();
    outputElement.append(tableHeaders);
    for ( employee of employeeArray) {
      outputElement.append( '<tr>' + 
        '<td>' + employee.firstName + '</td>' +
        '<td>' + employee.lastName + '</td>' +
        '<td>' + employee.idNumber + '</td>' +
        '<td>' + employee.title + '</td>' +
        '<td>' + employee.annualSalary + '</td>' + '</tr>');
    } // end for of
} // end showEmployee


// old show employee // function to display employees on a table
// function showEmployee() {
//     // let outputElement = $ ( '#employeeTableRow' );
//     // outputElement.empty();
//     // for ( employee of employeeArray) {
//     //   outputElement.append( '<tr>' + 
//     //     '<td>' + employee.firstName + '</td>' +
//     //     '<td>' + employee.lastName + '</td>' +
//     //     '<td>' + employee.idNumber + '</td>' +
//     //     '<td>' + employee.title + '</td>' +
//     //     '<td>' + employee.annualSalary + '</td>' + '</tr>');
//     // } // end for of
// } // end showEmployee

//   // add display message function
//   function displayMessage( text ) {
//     let outputError = $ ( '#errorMessage' );
//     outputError.empty();
//     outputError.append( '<p>' + text + '</p>' );
//   }