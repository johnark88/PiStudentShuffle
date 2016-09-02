console.log('Yes pistudents is sourced');


var students;

$(document).ready(function(){
  console.log('In doc ready ');

  var searchURL = 'http://devjana.net/pi/pi_students.json';
  console.log(searchURL);

  //ajax call
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function(data) {
      console.log('get json data = ', data);
      students = data;
      console.log(students, 'work');
    showStudents(data);
    }
  });
});

var showStudents = function(){
  console.log('showStudents, ' , students);
  $('#outputDiv').empty();
};
