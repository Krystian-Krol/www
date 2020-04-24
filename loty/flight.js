var people = document.getElementsByClassName('person');
var person = people[0];
for (var i = 1; i < people.length; i++) {
    if (people[i].getAttribute('data-identyfikator-pasazera') > person.getAttribute('data-identyfikator-pasazera')) {
        person = people[i];
    }
}
console.log(person.textContent.split('\n')[0]);
