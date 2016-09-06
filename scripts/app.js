console.log('Yes app.js is sourced');
// global variables
var students;
var count = 0;
var clock = 0;


$(document).ready(function(){
  console.log('In doc ready ');

  //URL to retrive json data from
  var studentsURL = 'http://devjana.net/pi/pi_students.json';
  console.log(studentsURL);

  //ajax call
  $.ajax({
    url: studentsURL,
    dataType: 'JSON',
    success: function(data) {
      console.log('great success = ', data.students);
        //send data to global variable
        students = data.students;
        //call showStudents function
        allStudents();
        showStudents();
    }//end success
  });//end ajax call

    //prevButton on click
  $('#prevButton').click(function (){
    clock = 0;
    console.log('prevButton');
    //index less than 0 go to last record
    count--;
    if (count < 0) {
      count = students.length -1;
    }//end if
    //call showStudents function
    showStudents();
  });//prevButton click


  //nextButton on click
  $('#nextButton').click(function (){
    clock = 0;
    console.log('nextButton');
    //if index greater than or equal to got to next record
    count++;
    if (count >= students.length) {
      count = 0;
    }//end if
    //call showStudents function
    showStudents();
  });//end nextButton click
});//end document ready


  var showStudents = function(index){
    // console.log('showStudents, ' , students);
    //clear the output div
    if (index !== undefined ) {
      count = index;
    }
    var outputDiv = $('#outputDiv');
    outputDiv.empty();

      //create header for student name
      var nameHeader = document.createElement('h2');
      //get name for header
      nameHeader.textContent = students[count].first_name + ' ' + students[count].last_name;
      //create new paragraph element for student info
      var infoPara = document.createElement('p');
      //get info for paragraph
      infoPara.textContent = students[count].info;

      //create count display ie 1/17
      var countDisplay = document.createElement('p');
      var countPlus = count+1;
      countDisplay.textContent = countPlus + '/' + students.length;

      //append to the DOM for display
      outputDiv.append(nameHeader);
      outputDiv.append(infoPara);
      outputDiv.append(countDisplay);

  //     $( "#outputDiv" ).fadeOut( "slow", function() {
  //       // Animation complete.
  //       outputDiv.append(nameHeader);
  //       outputDiv.append(infoPara)();
  //       outputDiv.fadeIn();
  // });
};//end show students function

  //create and append button for each student
  var allStudents = function () {
    console.log('in all students ', students);
    //loop thru students and append each to the dom as clickable buttons
    for (var i = 0; i < students.length; i++) {
      $('.studentBtn').append("<button onClick='showStudents( " + i + " )'>" + students[i].first_name + ' ' + students[i].last_name + "</button>");
    }//end for
  };//end allstudents function

  // ////////////\clock function - won't change currently displayed name.
  // var  autoSlide = setInterval(function(){
  //   console.log('in autoSlide' , clock);
  //   clock ++;
  //   if (clock === 10) {
  //     clock = 0;
  //     showStudents();
  //   }
  //
  // },1000);
