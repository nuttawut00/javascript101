let person1 = {
    name: 'tae',
    email: 'nuttawut@odds.team',
    lastname: 'in',
    age: 27
};

let person2 = {
    name: 'Gutong',
    email: 'Gutong@odds.team',
    lastname: 'Gu',
    age: 29
};
let person3 = {
    name: 'May',
    email: 'May@odds.team',
    lastname: 'May',
    age: 24
};
// function มีชื่อ
function readPerson(event) {
    console.log('name: ' + event.name + '\n email: ' + event.email + '\n lastname: ' + event.lastname + '\n Age: ' + event.age)
    return;
}


function helloPerson(event) {
  setTimeout(() => {
    readPerson(event)
  }, 0)
}

// function ไม่มีชื่อ anonymous
// () => {}
// function () {}
    

helloPerson(person2)
readPerson(person1)
readPerson(person3)


// function input -> { process } -> output