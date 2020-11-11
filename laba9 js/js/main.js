
function clear_all(){
    var html = "<p> </p>"
    document.getElementById('result_button').innerHTML = html;
}
function show_student_data(){
    var studentGroup = document.getElementById("Group");
    var studentSurname = document.getElementById("Surname");
    var studentCourse = document.getElementById("Course");

    var studentCourseValue = studentCourse.value;
    var studentSurnameValue = studentSurname.value;
    var studentGroupValue = studentGroup.value;
    
    var html = "";
    if(studentCourseValue != "" && studentGroupValue !="" && studentSurnameValue !=""){
        if(studentGroup.value.toString()[0] != studentCourse.value.toString()){
            html = "<h2>Група та курс мають різні значення!</h2>"
        }
        else{
            html = "<h2>Інформація про студента</h2>"
            html +="<h2>Група: " +studentGroup.value.toString()+ "</h2>";
            html +="<h2>Прізвище: " +studentSurname.value + "</h2>";
            html +="<h2>Курс: " +studentCourse.value.toString()+ "</h2>";
        }
    }
    
    
    document.getElementById('result_button').innerHTML = html;
}