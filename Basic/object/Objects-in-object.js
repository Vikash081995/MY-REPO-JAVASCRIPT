let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};
// To access or modify one of the properties of the address here, we can use two approaches:
company.address.zipcode = "33117";
company["address"]["number"] = "100";