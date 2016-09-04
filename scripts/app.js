console.log('Yes app.js is sourced');
// global variables
var students = [];
var count = 0;


$(document).ready(function(){
  console.log('In doc ready ');

  //URL to retrive json data from
  var studentsURL = 'http://devjana.net/pi/pi_students.json';
  // console.log(studentsURL);

  //ajax call
  $.ajax({
    url: studentsURL,
    dataType: 'JSON',
    success: function(data) {
      console.log('great success = ', data.students);
      for (var i = 0; i < data.students.length; i++) {
        //push to global array
        students.push(data.students[i]);
        showStudents();
      }
    }//end success
  });//end ajax call

  var showStudents = function(){
    // console.log('showStudents, ' , students);
    //clear the output div
    var outputDiv = $('#outputDiv');
    outputDiv.empty();
    //loop through the array of objects and display on DOM
    for (var i = 0; i < students.length; i++) {
      //create header for student name
      var nameHeader = document.createElement('h2');
      //get name for header
      nameHeader.textContent = students[i].first_name + ' ' + students[i].last_name;
      //create new paragraph element for student info
      var infoPara = document.createElement('p');
      //get info for paragraph
      infoPara.textContent = students[i].info;

      //append to the DOM for display
      outputDiv.append(nameHeader);
      outputDiv.append(infoPara);
    }//end for loop
  };

});//end document ready
