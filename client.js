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
let tableHeaders = '<tr>' + '<th>' + 'First Name' + '</th>' + '<th>' + 'Last Name' + '</th>' + '<th>' + 'ID' + '</th>' + '<th>' + 'Title' + '</th>' + '<th>' + 'Annual Salary' + '</th>' + '<th>' + 'Delete Row?' + '</th>' + '</tr>';
let monthlySalaryTotal;

$ ( document ).ready( function() {
    console.log('DOM ready');
    
    $ ( '#employeeTable' ).append(tableHeaders);

    $ ( '#addEmployeeButton' ).on( 'click', addEmployee );

    $ ( '#employeeTable' ).on('click', '.delete', removeFromArray);

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
    monthlySalaryDisplay();

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
        '<td>' + formatter.format(employee.annualSalary) + '</td>' + 
        '<td>' + '<button class ="delete">X</button>' + '</tr>');
    } // end for of
} // end showEmployee

// Displays the monthly total
function monthlySalaryDisplay() {
    monthlySalaryTotal = monthlySalary();
    let totalSalaryOut = '<div class=".float-right">' + 
                         'Monthly total: ' + monthlySalaryTotal + '</div>'
    $( '#monthlySalary' ).html(totalSalaryOut);
} // end monthlySalaryDisplay

// Totals the monthly expenditure
function monthlySalary() {
    let yearTotal = 0;
    for( employee of employeeArray ) {
        yearTotal += employee.annualSalary;
    }
    yearTotal = yearTotal / 12;
    return formatter.format(yearTotal);
}

// Removes a line from the table when delete is clicked. Calls a function to remove the row from employeeArray.
function removeFromArray() {
    console.log('Remove the row');
    console.log(this);
    let rowToRemove =  $(this).parent().siblings().text();
    console.log(rowToRemove);
    // console.log(test.search('12'));
    removeEmployee(rowToRemove);
    // this is the thing that was clicked on
    // $(this).parent().siblings().remove();
    // $(this).parent().remove();
    // parent() will be the li we want to remove
}

// Removes an employee from employeeArray
function removeEmployee(rowToDelete) {
    for( let i in employeeArray ) {
        let currentEmployee =   employeeArray[i].firstName + 
                                employeeArray[i].lastName + 
                                employeeArray[i].idNumber +
                                employeeArray[i].title +
                                employeeArray[i].annualSalary;
        // console.log(test2);
        if( rowToDelete == currentEmployee ) {
            employeeArray.splice(i, 1);
        } // end if
    } // end for in
    showEmployee();
    monthlySalaryDisplay();
} // end removeEmployee

// Create our number formatter. - Stolen from the internet
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    // the default value for minimumFractionDigits depends on the currency
    // and is usually already 2
});