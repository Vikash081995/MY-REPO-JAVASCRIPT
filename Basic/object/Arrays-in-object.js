const company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys"
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};
//The second value of the activities array can be fetched using this statement:
let activity = company.activities[1];
console.log(activity) //"improving kids' health",