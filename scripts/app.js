console.log('Yes pistudents is sourced');


var students;

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

    showStudents(data.students);
  }//end success
  });//end ajax call
});//end document ready

var showStudents = function(piStudents){
  console.log('showStudents, ' , piStudents);

  var outputDiv = $('#outputDiv');
  //clear the output div
  outputDiv.empty();
  //loop through the array of objects and display on DOM
  for (var i = 0; i < piStudents.length; i++) {
    outputDiv.append('<p>' + 'Name: ' +' ' + piStudents[i].first_name + ' ' + piStudents[i].last_name + '</p>');
    outputDiv.append('<p>' + 'blurb: '+ ' ' + piStudents[i].info + '</p>');
  }
};
