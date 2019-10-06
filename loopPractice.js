const salutations = [
  "hi",
  "hello",
  "good evening",
  "goodnight",
  "fuck off",
  "I love you with all my heart"
];

// add functionality to this function to have this console.log every salutation with
// the name given as argument.
// for instance, this should console.log "hi Jess" and
// then console log "hello Jess" (and so on)

const logSalutations = name => {
  salutations.forEach(salutation => {
    console.log(`${salutation} ${name}`);
  });
};

console.log(logSalutations("Jess"));

// add functionality that will return an array of salutations plus the given name.
// for instance, it should return ["hi Jess", "hello Jess", "good evening Jess"...]
const returnSalutations = name => {
  const newArr = salutations.map(salutation => salutation + " " + name);
  return newArr;
};

console.log(returnSalutations("Jess"));

// add functionality that console.logs information on all given users
// for instance, it should console.log "Hi my name is Jess and my fav color is green." and
// then console.log "Hi my name is Mike and my fav color is black."
const tellMeAboutUsers = users => {
  users.forEach(user => {
    console.log(
      `Hi my name is ${user.name} and my fav color is ${user.favColor}`
    );
  });
};

const users = [
  { name: "Jess", favColor: "green" },
  { name: "Mike", favColor: "black" },
  { name: "Pep Pep", favColor: "food" }
];

console.log(tellMeAboutUsers(users));
