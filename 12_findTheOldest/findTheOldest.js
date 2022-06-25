const findTheOldest = function(people) {
    let ages = people.map(person => ({
        name : person.name,
        age: person.hasOwnProperty('yearOfDeath')? person.yearOfDeath - person.yearOfBirth: new Date().getFullYear()-person.yearOfBirth }));
    let answer = ages.reduce((acc, curr) => {
        if (curr.age > acc.age) {
            acc.age = curr.age;
            acc.name = curr.name;
        }
        return acc;
    }, {name: "", age: 0});
    return answer;
};

// Do not edit below this line
module.exports = findTheOldest;
