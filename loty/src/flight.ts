let people = document.getElementsByClassName('person');
let person = people[0];
for (let i = 1; i < people.length; i++) {
    if(people[i].getAttribute('data-identyfikator-pasazera') > person.getAttribute('data-identyfikator-pasazera')) {
        person = people[i];
    }
}
console.log(person.textContent.split('\n')[0]);