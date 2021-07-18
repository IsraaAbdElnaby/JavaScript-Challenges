//Classroom[Teacher, Assistant, Students]
let classroom = {
    list: ["Bella", "John", "Lisa", "Monica", "Harry"],
    hasTeachingAssistant: true
 };

function getStudents (classroom) {
    if(classroom.hasTeachingAssistant)
        [teacher, teachingAssistant, ...students] = classroom.list;
    else [teacher, ...students] = classroom.list;

    return students;

}

console.log(getStudents(classroom));