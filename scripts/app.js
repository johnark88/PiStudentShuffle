console.log('Yes pistudents is sourced');


var students = [];
var counter = 0;

$(document).ready(function(){
  console.log('In doc ready ');

  var studentsURL = 'http://devjana.net/pi/pi_students.json';
  console.log(studentsURL);

  //ajax call
  $.ajax({
    url: studentsURL,
    dataType: 'JSON',
    success: function(data) {
      console.log('great success = ', data.students);
      for (var i = 0; i < data.students.length; i++) {
      students.push(data.students[i]);
      }

    showStudents();
  }//end success
  });//end ajax call
});//end document ready

var showStudents = function(){
  console.log('showStudents, ' , students);
  //clear the output div
  var outputDiv = $('#outputDiv');
  outputDiv.empty();


  var nameHeader = document.createElement('h2');
  var newPara = document.createElement('p');

  //loop through the array of objects and display on DOM
  for (var i = 0; i < students.length; i++) {

  // $( '.nextButton' ).on( 'click' , function(){
    // counter++;


    // outputDiv.append('<p>' + 'Name: ' +' ' + students[i].first_name + ' ' + students[i].last_name + '</p>');
    // outputDiv.append('<p>' + 'blurb: '+ ' ' + students[i].info + '</p>');


// console.log('counter = ', counter);

  // });
}
};
