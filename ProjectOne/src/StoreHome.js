$(document).ready(function(e){

            //this function is called when tabs are clicked on
            $('#container ul.nav a').click(function(e){
                e.preventDefault();


        $('#container').children('div').hide().filter(this.hash).show();
        $('#container ul.nav a').removeClass('selected');

        $(this).addClass('selected');

        return false;
        }).filter(':first').click();

        //The validation for the form to be submited

        $("#courseForm").validate({
            rules: {
                course: {required: true},
                quizGrade: {required: true, min: 0, max: 100},
                testGrade: {required: true, min: 0, max: 100},
                homeworkGrade: {required: true, min: 0, max: 100},
            },
            messages: {
                course: {required: "Please enter a course name."},
                quizGrade: {required: "Please enter a number 0 thru 100"},
                testGrade: {required: "Please enter a number 0 thru 100"},
                homeworkGrade: {required: "Please enter a number 0 thru 100"}
            }
        });


        $("#radioForm").validate({
            rules: {
                classFind: {required: true},
                scores: {required: true, min: 0, max: 100},
            },
            messages: {
                classFind: {required: "Please enter a course name."},
                scores: {required: "Please enter a number 0 thru 100"}
            }
        });


$(function(){
  $('#defaultslide').slider({
    max: 10,
    min: 0,
    value: 0,
    slide: function(e,ui) {
      $('#currentval').html(ui.value);
    }
  });


});



});