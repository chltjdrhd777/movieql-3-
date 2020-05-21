export const people = [
  {
    name: "Ande",
    age: 23,
    gender: "female",
    id: 1,
  },
  {
    name: "Anderson",
    age: 28,
    gender: "male",
    id: 2,
  },
  {
    name: "Anson",
    age: 21,
    gender: "male",
    id: 3,
  },
];

export const getByID = (id) => {
  const filtedPeople = people.filter((everyPerson) => id === everyPerson.id);
  return filtedPeople[0];
};
