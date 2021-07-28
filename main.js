var student_array = [];

function submit() {
    var student_1 = document.getElementById("student1").value;
    var student_2 = document.getElementById("student2").value;
    var student_3 = document.getElementById("student3").value;
    var student_4 = document.getElementById("student4").value;

    student_array.push(student_1);
    student_array.push(student_2);
    student_array.push(student_3);
    student_array.push(student_4);

    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;

    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}