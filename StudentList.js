var naame = document.getElementById('name').value.trim();
var rollNo = document.getElementById('rollNo').value.trim();
var dept = document.getElementById('dept').value.trim();

var list = document.getElementById('student-list');

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // if (naame === '' || rollNo === '' || dept === '')
    //     return;

    var student = document.createElement('li');
    // student.classList.add('student');
    student.textContent = `${naame} - ${rollNo} - ${dept}`;
    list.appendChild(student);

    alert('Hi');
});