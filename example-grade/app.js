var gradeApp = {};
const gradeInput = document.getElementById('grade');
const submitButton = document.getElementById('button');
// 80 - 100 A
// 70 - 79 B
// 60 - 69 C
// 50 - 59 D
// < 50 F

gradeApp.calculateGrade = function calculateGrade(point) {
    var pointNumber = +point
    if (point >= 80) {
        return 'A'
    }
    else if (point >= 70) {
        return 'B'
    }
    else if (point >= 60) {
        return 'C'
    }
    else if (point >= 50) {
        return 'D'
    }
    else {
        return 'F'
    }

}
// gradeApp.calculateGrade = calculateGrade

function pointtext(event) {

    const point = gradeInput.value;
    const result = gradeApp.calculateGrade(point);
    console.log(point)
    if (result === 'A') {
        alert('A')
    }
    else if (result === 'B') {
        alert('B')
    }
    else if (result === 'C') {
        alert('C')
    }
    else if (result === 'D') {
        alert('D')
    }
    else if (result === 'F') {
        alert('F')
    }
}

gradeInput.addEventListener('change', pointtext);